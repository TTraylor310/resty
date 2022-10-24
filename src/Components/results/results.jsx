const Results = ({fakeData}) => {

  return (
    <section>
      <pre>
        {fakeData ? JSON.stringify(fakeData, undefined, 2) : null}
      </pre>
    </section>
  )
}
export default Results;