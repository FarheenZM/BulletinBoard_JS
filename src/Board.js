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
  }

  eachNote(note, i) {
    return (
      <Note key={i}
            index={i}>
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
