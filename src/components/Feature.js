import React from 'react'
import { Route, Link } from 'react-router-dom'
import { appconfig } from '../my-aws-config'

const FeatureId = ({ match }) => <p>{match.params.id}</p>

class Feature extends React.Component {
  render() {
    const { url } = this.props.match
    return (
      <div>
        <h1>Feature!</h1>
        <strong>select a feature</strong>
        <ul>
          <li>
            <Link to="/feature/1">feature 1 </Link>
          </li>
          <li>
            <Link to="/feature/2">feature 2 </Link>
          </li>
          <li>
            <Link to="/feature/3">feature 3 </Link>
          </li>
        </ul>
        <Route path="/feature/:id" component={FeatureId} />
      </div>
    )
  }
}
export default Feature
