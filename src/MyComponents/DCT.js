// DecisionTree.js
import React from 'react'
import './tree.css';

const DecisionTree = () => {
  const treeData = [
    {
        id : '1',
        text : 'xdbcjhsdvjcsdf',
        diamond: false,
        children:[
            {
                id:'2',
                text:'dvdfjvbfd',
                diamond: false,
                children:[
                    {
                        id:'3',
                        text:'jkvbdfhv',
                        diamond: false,
                        children:[
                            {
                                id:'4',
                                text:'dbvhd',
                                diamond: false,
                            }
                        ]
                    },
                    {
                        id:'5',
                        text:'grgrgrefg',
                        diamond: false,
                        children:[
                            {
                                id:'4',
                                text:'dbvhd',
                                diamond: false,
                            }
                        ]
                    }
                ]
            }
        ]
    }
]


return (
  <div className="tree">
      {
          treeRendering(treeData)
      }
            
  </div>
      )
  }
  
  
  const treeRendering = (treeData) => {
      
      return (
          <>
                  <ul>
              {
                  treeData.map((item)=>                
                      <li className={item.text+item.id}>
                          <div>{ item.id}</div>
                          {
                              item.children && item.children.length ?
                              treeRendering(item.children)
                              :''
                          }
                      </li>
                  )            
                  
              }
              </ul>
          </>
      )
  }

export default DecisionTree;




