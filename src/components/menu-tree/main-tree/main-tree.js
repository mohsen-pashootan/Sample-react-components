import React from "react";
import TreeNode from "../tree-node/tree-node";
import { Div } from "./style";

export default class MainTree extends React.Component {
  state = {
    menuItems: [
      {
        id: 1,
        checked: true,
        title: "level one",
        active: true,
        children: [],
      },
      {
        id: 2,
        checked: false,
        title: "level one",
        active: true,
        children: [
          {
            id: 21,
            checked: false,
            title: "level two",
            active: true,
            children: [],
          },
        ],
      },
      {
        id: 3,
        checked: false,
        title: "level one",
        active: true,
        children: [
          {
            id: 31,
            checked: false,
            title: "level two",
            active: true,
            children: [
              {
                id: 311,
                checked: false,
                title: "level three",
                active: false,
                children: [
                  {
                    id: 3111,
                    checked: false,
                    title: "level four",
                    active: true,
                    children: [],
                  },
                  {
                    id: 3112,
                    checked: false,
                    title: "level four",
                    active: true,
                    children: [
                      {
                        id: 31121,
                        checked: false,
                        title: "level five",
                        label: "disable",
                        children: [],
                      },
                    ],
                  },
                  {
                    id: 3113,
                    checked: false,
                    title: "level four",
                    active: false,
                    children: [
                      {
                        id: 31131,
                        checked: false,
                        title: "level four",
                        active: true,
                        children: [],
                      },
                    ],
                  },
                  {
                    id: 3114,
                    checked: false,
                    title: "level four",
                    active: true,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  handleChecked = (id) => {
    const arr = JSON.parse(JSON.stringify(this.state.menuItems));
    arr.map((item) => checkedId(item));

    function checkedId(item) {
      if (item.id === id) {
        checked(item);
      } else if (item.children.length > 0) {
        item.children.map((i) => checkedId(i));
      }
    }
    function checked(item) {
      item.checked = !item.checked;
      if (item.children.length > 0) {
        item.children.map((i) => (i.checked ? i.checked : checked(i)));
      }
    }
    this.setState({ menuItems: arr });
  };

  renderNode(nodes) {
    return nodes.map((node) => {
      return (
        <TreeNode
          key={node.id}
          title={node.title}
          id={node.id}
          checked={node.checked}
          onChecked={this.handleChecked}
        >
          {node.children.length > 0 && this.renderNode(node.children)}
        </TreeNode>
      );
    });
  }

  render() {
    return <Div>{this.renderNode(this.state.menuItems)}</Div>;
  }
}

// function check(arr, id) {
//   for (let i = 0; i < arr.length; i++) {
//     // let index = arr[i].children.length > 0;
//     if (arr[i].id === id) {
//       chek(arr[i])
//       function chek(arr) {
//         arr.checked = !arr.checked;
//         if (arr[i].children.length > 0) {
//           chek(arr[i].children);
//         }
//       }
//       arr[i].checked = !arr[i].checked;
//       if (arr[i].children.length > 0) {
//         for (let j = 0; j < arr[i].children.length; j++) {
//           check(arr[i].children[j])
//         }
//       }
//     } else if (arr[i].children.length > 0) {
//       if (arr[i].children[0].id === id) {
//         console.log(check(arr[i].children[0]), arr[i].children[0]);
//         // return check(arr[i].children[j])
//         // (arr[i].children[j].checked = !arr[i].children[j].checked)
//       }
//     }
//   }
// }
