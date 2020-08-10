import React from "react";
import { Title, Icon, UL, LI, Label, DATA } from "./style";

export default class AccordionMohsen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  handleSelect = (id) => {
    const { selected } = this.state;
    let selectedId = id;
    selectedId === selected
      ? this.setState({ selected: null })
      : this.setState({ selected: id });
  };

  render() {
    const { selected } = this.state;
    const { items } = this.props;
    return (
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <div onClick={() => this.handleSelect(item.id)}>
              <Title>
                {item.title}
                <Icon open={selected === item.id}>
                  <i className="icon-down-open-big" />
                </Icon>
              </Title>
            </div>
            <div>
              {selected === item.id && (
                <UL>
                  {item.description.map((desc) => (
                    <LI>
                      <Label>{desc.key} </Label>
                      <DATA> {desc.value}</DATA>
                    </LI>
                  ))}
                </UL>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
