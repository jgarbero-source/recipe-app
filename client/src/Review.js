function Review({review}) {
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  // console.log(date)
  // function reviewMadeWhen(){
  //   const current = new Date()
  //   const month = current.getMonth() +1
  //   return month
  // }
  // console.log(reviewMadeWhen())

  //console.log(review)
  //  const {user, recipe, rating, description, title} = review
  return (
    <>
    {/* <h2>Written by: {review.user.username}</h2> */}
      <p>Rating: {review.rating}</p>
      <p>
        {review.description}
      </p> 

    </>
      
  )
}

export default Review