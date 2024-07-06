const Difficulty = ({handleDifficulty})=>{
    return (
        <div className='difficulty'>
        <label htmlFor='diff'>Set Difficulty </label>
        <select id='diff'  name='difficulty' onChange={handleDifficulty}>
          <option value='Easy'>Easy</option>
          <option value='Medium'>Medium</option>
          <option value='Hard'>Hard</option>
        </select>
      </div>
    )
}

export default Difficulty