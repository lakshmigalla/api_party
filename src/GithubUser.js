import React, { Component } from 'react'

class GithubUser extends Component {
  render() {
    const { params } = this.props.match

    return (
      <div className="GithubUser">
        {params.username}
      </div>
    )
  }
}

export default GithubUser