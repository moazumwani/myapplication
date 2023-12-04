import React, { useState } from 'react';
import './tree.css';

const DecisionTree = () => {
  const [collapsedNodes, setCollapsedNodes] = useState([]);

  const handleNodeToggle = (id) => {
    if (collapsedNodes.includes(id)) {
      setCollapsedNodes(collapsedNodes.filter((node) => node !== id));
    } else {
      setCollapsedNodes([...collapsedNodes, id]);
    }
  };

  const treeRendering = (treeData) => {
    return (
      <>
        <ul>
          {treeData.map((item) => (
            <li key={item.id} className={item.text + item.id}>
              <div>
                <button className='plus-minus' onClick={() => handleNodeToggle(item.id)}>
                  {collapsedNodes && collapsedNodes.includes(item.id) ? '+' : '-'}
                </button>
                {item.id}
              </div>
              {!collapsedNodes || !collapsedNodes.includes(item.id) ? (
                item.children && item.children.length > 0 && (
                  <ul>{treeRendering(item.children)}</ul>
                )
              ) : null}
            </li>
          ))}
        </ul>
      </>
    );
  };

  const treeData = [
    // {
    //   id : 'Premium  30/45%',
    //   text : '1',
    //   diamond: false,
    //   children:[]
    // },
    {
      id : 'Main Stram 30/45%',
      text : '2',
      diamond: false,
      children:[]
    },
   
    {
        id : 'Low Budget 30%/45%',
        text : 'Premium',
        diamond: false,
        children:[
          // {
          //   id:'International 30%/ 45%',
          //               text:'7',
          //               diamond: false,
          //               children:[]
          // },
          {
                id:'Local 30%/ 45%',
                text:'6',
                diamond: false,
                children:[
                    {
                        id:'Brand 1',
                        text:'7',
                        diamond: false,
                        children:[
                            {
                                id:'SubBrand',
                                text:'8',
                                diamond: false,
                                // children:[
                                //   {
                                //     id:'Category',
                                //     text:'8',
                                //     diamond: false,
                                //     children:[
                                //       {
                                //         id:'Size',
                                //         text:'8',
                                //         diamond: false,
                                //         children:[
                                //           {
                                //             id:'Color',
                                //             text:'8',
                                //             diamond: false,
                                //         },
                                //         ]
                                //     },
                                //     ]
                                // },
                                // ]
                            },
                            {
                                id:'SubBrand',
                                text:'88',
                                diamond: false,
                                children:[
                                  {
                                    id:'Category',
                                    text:'8',
                                    diamond: false,
                                    children:[
                                      {
                                        id:'Size',
                                        text:'8',
                                        diamond: false,
                                        children:[
                                          {
                                            id:'Color',
                                            text:'8',
                                            diamond: false,
                                        },
                                        ]
                                    },
                                    ]
                                },
                                ]
                            }
                        ]
                    },
                    {
                        id:'Brand 2',
                        text:'10',
                        diamond: false,
                        children:[
                            {
                                id:'SubBrand 2',
                                text:'11',
                                diamond: false,
                                
                            }
                        ]
                    }
                ]
            },
            {
              id:'Region 30%/ 45%',
                        text:'7',
                        diamond: false,
                        children:[]
            }

        ]
        
    },
    {
      id : 'Entry',
      text : '2',
      diamond: false,
      children:[]
    }
]

  return <div className="tree">{treeRendering(treeData)}</div>;
};

export default DecisionTree;
