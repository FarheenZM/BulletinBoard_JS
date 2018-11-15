import React, { Component } from 'react'
import Note from './Note'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes : [
        {
          id: 0,
          note: "call xyz"
        },
        {
          id: 1,
          note: "drink water"
        },
        {
          id: 2,
          note: "bla bla"
        }
      ]
    }
    this.eachNote = this.eachNote.bind(this)
    this.updateNote = this.updateNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
  }

  updateNote(newText, i) {
    console.log("updating note at index ", i , newText);
    this.setState(prevState => ({
      notes : prevState.notes.map(
        note => (note.id !== i) ? note : {...note, note : newText}
      )
    }))
  }

  removeNote(id) {
    console.log("Removing note at ", id);
    this.setState(prevState => ({
      notes : prevState.notes.filter(note => note.id !== id)
    }))
  }

  eachNote(note, i) {
    return (
      <Note key={i}
            index={i}
            onChange={this.updateNote}
            onRemove={this.removeNote}>
        {note.note}
      </Note>
    )
  }

  render() {
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
      </div>
    )
  }
}

export default Board
