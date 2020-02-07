import React from "react"
import ApartmentInfo from "./apartmentInfo"
import { Apartments } from "../pages/apartments"
import style from "../styles/apartments.module.css"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
    let list = this.state.list
    this.props.apartment.map(({ node }) => list.push(node))
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <List
              items={this.state.list}
              delete={this.removeItem}
              apartment={this.props.apartment}
            />
          </section>
          <hr />
        </div>
      </div>
    )
  }
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      filtered: [],
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items,
    })
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = []
    // Variable to hold the filtered list before putting into state
    let newList = []

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.items

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.excerpt.toLowerCase()
        // change search term to lowercase
        const filter = e.target.value.toLowerCase()
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter)
      })
    } else {
      // If the search bar is empty, set newList to original task list
      newList = 0
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList,
    })
  }

  render() {
    if (this.state.filtered.length > 0) {
      return (
        <div>
          <input
            type="text"
            className={style.input}
            onChange={this.handleChange}
            placeholder="Search..."
          />
          {this.state.filtered.map(item => (
            <ApartmentInfo key={item.id} apartment={item}></ApartmentInfo>
          ))}
        </div>
      )
    } else {
      return (
        <div>
          <input
            type="text"
            className={style.input}
            onChange={this.handleChange}
            placeholder="Search..."
          />
          <Apartments apartment={this.props.apartment}></Apartments>
        </div>
      )
    }
  }
}
