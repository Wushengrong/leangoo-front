<template>
  <div class="main-div">
    <div class="boardList-section">
      <div class="board_category">
        <b-button-toolbar>
          <icon name="user"></icon>
          <h6 style="padding-left: 15px">个人看板</h6>
          <b-button-group class="button-group1 mx-3" size="sm">
            <b-button variant="info" @click="OrderByFlag = 'BoardStartDate'">时间</b-button>
            <b-button variant="info" @click="OrderByFlag = 'BoardName'">名称</b-button>
            <b-button variant="info" @click="OrderByFlag = ''">自定义</b-button>
          </b-button-group>
          <b-button variant="info" size="sm" style="background-color: rgba(255, 255, 255, 0.3)" @click="showCollapse" v-b-toggle.collapse1>
            <icon :name="icon"></icon>
          </b-button>
        </b-button-toolbar>
        <b-collapse id="collapse1" no-body>
          <b-card>
            <div class="card-text">
              <b-card text-variant="white" class="text-center mb-4 ignore-elements" no-body style="background-color:#4A97C3;height: 90px;max-width: 270px;cursor: pointer;min-width: 270px" border-variant="none" name="new">
                <div class="card-text">
                  <span style="font-size: 16px;line-height: 90px">新建面板</span>
                </div>
              </b-card>
              <draggable v-model="PersonalBoard" class="card-deck" :move="checkMove" :options="dragOptions" @update="datadragEnd">
                <b-card v-for="(Board,index) in SortPersonalBoard" :key="index" text-variant="white" class="text-center mb-4" no-body style="background-color:#DFECF4;height: 90px;max-width: 270px;cursor: pointer;min-width: 270px" border-variant="none">
                  <div class="card-text" style="color:rgb(85,85,85)">
                    <span style="font-size: 16px;line-height: 90px">{{Board.BoardName}}</span>
                  </div>
                </b-card>
              </draggable>
            </div>
          </b-card>
        </b-collapse>
      </div>
    </div>
    <div class="project-section mt-2" v-for="(Project,index) in  searchResult" :key="index">
      <div class="board_category">
        <b-button-toolbar>
          <icon name="cubes"></icon>
          <h6 style="padding-left: 15px">{{Project.ProjectName}}</h6>
          <b-button-group class="button-group1 mx-3" size="sm">
            <b-button variant="info">项目成员</b-button>
            <b-button variant="info">项目统计</b-button>
            <b-button variant="info">置顶</b-button>
          </b-button-group>
          <b-button variant="info" size="sm" style="background-color: rgba(255, 255, 255, 0.3)" v-b-toggle="'collapes'+index">
            <icon :name="icon"></icon>
          </b-button>
        </b-button-toolbar>
        <b-collapse no-body :id="'collapes'+index" class="coll">
          <b-card>
            <div class="card-text">
              <b-card text-variant="white" class="text-center mb-4 ignore-elements" no-body style="background-color:#4A97C3;height: 90px;max-width: 270px;cursor: pointer;min-width: 270px" border-variant="none" name="new">
                <div class="card-text">
                  <span style="font-size: 16px;line-height: 90px">新建面板</span>
                </div>
              </b-card>
              <draggable v-model="Project.BoardList" class="card-deck" :move="checkMove">
                <b-card v-for="(Board,index) in Project.BoardList" :key="index" text-variant="white" class="text-center mb-4" no-body style="background-color:#DFECF4;height: 90px;max-width: 270px;cursor: pointer;min-width: 270px" border-variant="none">
                  <div class="card-text" style="color:rgb(85,85,85)">
                    <span style="font-size: 16px;line-height: 90px">{{Board.BoardName}}</span>
                  </div>
                </b-card>
              </draggable>
            </div>
          </b-card>
        </b-collapse>
      </div>
    </div>
    <div class="archive-category">
      <ul>
        <li>
          <a href="#">查看已归档看板</a>
        </li>
        <li>
          <a href="#">查看已归档项目</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Bus from '../bus.js'
export default {
  components: { draggable },
  data() {
    return {
      icon: 'chevron-down',
      OrderByFlag: 'BoardLocate',
      disabled: true,
      ProjectList: [],
      searchResult:[],
      searhcOptions:{keys:['BoardName']},
      PersonalBoard: [],
      term:''
    }
  },
  watch: {
    OrderByFlag(newValue) {
      if (newValue === '') {
        this.disabled = false;
      } else this.disabled = true
    },
    term(){
         if(this.term!='')
      this.$search(this.term,this.ProjectList,{keys:["BoardList.BoardName"]}).then(result=>{
        this.searchResult=result
      });else this.searchResult=this.ProjectList;
    }
  },
  computed: {
    SortPersonalBoard() {
      var filterKey=this.term;
      var data=this.PersonalBoard;
      if(filterKey!=''){
      data=  this.PersonalBoard.filter(function(Board){
          return Object.keys(Board).some(function(key){
              return String(Board[key]).toLowerCase().indexOf(filterKey)>-1
          })
        })
      }
      return this.lodash.orderBy(data,this.OrderByFlag)
    },
    SortProjectBoard(){
      if(this.term!='')
      this.$search(this.term,this.ProjectList,{keys:["BoardList.BoardName"]}).then(result=>{
        this.searchResult=result
      });
      return this.ProjectList
    },
    dragOptions() {
      return {
        ghostClass: 'ghost',
        animation: 0,
        disabled: this.disabled
      }
    }
  },
  methods: {
    showCollapse() {
      if (this.icon === 'chevron-down')
        this.icon = 'chevron-up';
      else this.icon = 'chevron-down'
    },
    checkMove({ relatedContext, draggedContext }) {
      const draggedElment = draggedContext.element
      const relatedElement = relatedContext.element;
      return true;
    },
    datadragEnd(evt) {
      console.log('拖动前索引:' + evt.oldIndex)
      console.log('拖动后索引:' + evt.newIndex)
      console.log(this.PersonalBoard[0].BoardName+this.PersonalBoard[0].BoardLocate)
      for(let i=0;i<this.PersonalBoard.length;i++){
        this.PersonalBoard[i].BoardLocate=i
      }
      console.log(this.PersonalBoard[0].BoardName+this.PersonalBoard[0].BoardLocate)
    },
  },
  created() {
    this.$ajax.post('/getUserProjectList').then((res) => {
      this.ProjectList = res.data.data;
      this.PersonalBoard = res.data.PersonalBoard
      this.searchResult=res.data.data
    }).catch(res => {
      console.log(res)
    }),
   Bus.$on('search',value=>{
     this.term=value;
   }) 
  }
}
</script>


<style scoped>
.main-div {
  color: white;
  margin: 0 auto;
  max-width: 1250px;
  overflow: auto;
}

.boardList-section {
  margin-top: 20px;
}

.button-group1 button {
  color: white;
  background-color: rgba(255, 255, 255, 0.3)
}

#collapse1 .card {
  background-color: #0E74AF;
  border: none;
}

.coll .card {
  background-color: #0E74AF;
  border: none
}

.ghost {
  opacity: .5;
  background: #C8EBFB;
}

.archive-category {
  float: left;
  margin-top: 30px;
}

.archive-category ul {
  list-style: none;
}

.archive-category ul li a {
  color: white;
  text-decoration: underline;
}
</style>
