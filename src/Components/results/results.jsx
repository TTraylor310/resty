const Results = ({resultData}) => {

  return (
    <section>
      <pre>
        {/* {resultData ? JSON.stringify(resultData, undefined, 2) : null} */}
        {resultData ? resultData.map((pokemon, index) => (<li key={`poke-${index}`}>{pokemon.name}</li>)) : null}
      </pre>
    </section>
  )
}
export default Results;