export default function review({ numOfstars }) {
  let stars = [];
  for (let i = 0; i < numOfstars; i++) {
    stars.push(<i class="fa-solid fa-star text-warning"></i>);
  }

  return (
    <div className="d-flex flex-column gap-2 mx-3 mx-md-5 my-5">
      <div className="d-flex gap-3">
        <img
          alt="review"
          src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
        />
        <div className="d-flex flex-column">
          <div className="d-flex gap-3">
            <h2>Title</h2>
            <h3 className="text-secondary">2018</h3>
          </div>
          <div className="d-flex gap-2">
            <div className="">
              {stars.map((e) => {
                return e;
              })}
            </div>
            <p className="text-secondary d-none d-md-inline">
              Uploaded 22 may 2020
            </p>
          </div>
          <p className="text-secondary d-md-none">Uploaded 22 may 2020</p>
          <p className="text-light d-none d-md-inline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            pariatur vero eaque temporibus dolor quam ipsam ipsum beatae
            sapiente adipisci vel, at accusantium minima quaerat. Aliquam ex a
            consectetur magni?
          </p>
        </div>
      </div>
      <p className="d-inline d-md-none text-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        pariatur vero eaque temporibus dolor quam ipsam ipsum beatae sapiente
        adipisci vel, at accusantium minima quaerat. Aliquam ex a consectetur
        magni?
      </p>
    </div>
  );
}
