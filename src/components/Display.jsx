import PropTypes from "prop-types"
import CharacterCard from "./CharacterCard"
import '../styles/Display.scss'

function Display({characterList}) {

    const characterCards = characterList.map(character =>
        <CharacterCard key={character.id} id={character.id} name={character.name} photo={character.photo} species={character.species}/>
    )
      
    return (
    <section className="Display_section">
        {characterCards}
    </section>
  )
}

Display.propTypes = {
    characterList: PropTypes.array
}

export default Display