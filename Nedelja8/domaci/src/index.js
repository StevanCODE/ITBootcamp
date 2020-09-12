import React from 'react';
import ReactDOM from 'react-dom';



const App = ({ str, desc, url }) => {

  const Forma = () => {
    return (
      <form>
        <input type="text" id="input"></input>
        <input type="submit" value={str} onClick={(e) => {
          e.preventDefault()
        }}></input>
      </form>
    )
  }

  const Card = () => {
    const Description = ({ desc }) => {
      return (
        <p> {desc} </p>
      )

    }
    const Emoji = ({ url }) => {
      return (
        <img src={url} alt="emoji"></img>
      )
    }

    return (
      <>
        <Emoji url="https://i.pinimg.com/564x/86/df/3f/86df3f4c1cf0e427826878a70783f32b.jpg" />
        <Description desc="smiling emoji" />
      </>
    )
  }


  return (
    <div>
      <Forma />
      <Card />

    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App str="Klik" />
  </React.StrictMode>,
  document.getElementById('root')
);




