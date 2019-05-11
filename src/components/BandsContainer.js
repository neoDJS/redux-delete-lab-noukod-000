import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(band => <Todo key={band.id} band={band} />)
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
