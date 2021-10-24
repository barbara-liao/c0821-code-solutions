import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  handleOpenMenu() {
    this.setState({ showMenu: true });
  }

  handleSelectItem() {
    this.setState({ showMenu: false });
  }

  modalHidden() {
    return (this.state.showMenu ? '' : 'hidden');

  }

  render() {
    const isHidden = this.modalHidden();
    return (
      <div>
        <div onClick={this.handleSelectItem} className={`modal-overlay ${isHidden}`}>
          <div className="modal flex">
            <h2 className="menu-padding">Choose a Pokemon</h2>
            <button onClick={this.handleSelectItem} className="flex-start menu-padding">Bulbasaur</button>
            <button onClick={this.handleSelectItem} className="flex-start menu-padding">Charmander</button>
            <button onClick={this.handleSelectItem} className="flex-start menu-padding">Squirtle</button>
          </div>
        </div>
        <div>
          <button onClick={this.handleOpenMenu} className="icon-padding">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    );
  }
}
