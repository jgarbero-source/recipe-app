

function Review({review}) {
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  // console.log(date)
  function reviewMadeWhen(){
    const current = new Date()
    const month = current.getMonth() +1
    return month
  }
  console.log(reviewMadeWhen())
  return (
    <>

      <h1>{review.recipe.title}</h1>
      <h1>By: {review.user.username} </h1>
      <img src={review.recipe.image}></img>
      <p>Rating: {review.rating}</p>
      <p>
        {review.description}
      </p>

    </>
      
  )
}

export default Review