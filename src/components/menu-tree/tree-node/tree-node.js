import React from "react";
import { Icon, Div, MapLogo } from "./style";

export default class TreeNode extends React.Component {
  state = {
    selected: null,
  };

  handleOpen = (id) => {
    const { selected } = this.state;
    let selectedId = id;
    selectedId === selected
      ? this.setState({ selected: null })
      : this.setState({ selected: id });
  };

  render() {
    const { id, title, checked, children, onChecked } = this.props;
    const index = React.Children.toArray(children).length === 0;
    const { selected } = this.state;
    return (
      <div>
        {!index && (
          <Icon onClick={() => this.handleOpen(id)} open={selected === id}>
            <i className="icon-left-open-big" />
          </Icon>
        )}
        <Div>
          <input
            type="checkBox"
            checked={checked}
            onChange={() => onChecked(id)}
          />
          <MapLogo as="i" className="fa fa-sitemap" aria-hidden="true" />
          {title}
        </Div>
        <Div>{selected === id && children}</Div>
      </div>
    );
  }
}
