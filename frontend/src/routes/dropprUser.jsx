import Header from "../components/header";

export default function dropprUser(){
    return(
      <>  
        <Header />
        <br></br>
        <br></br>
        <div className="col-11 mx-auto">
        <div className="col-11 mx-auto border-bottom border-secondary">
          <p className="text-secondary fs-6">BIO</p>
        </div>
        <p className="text-secondary col-11 mx-auto my-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit,
          harum fuga tempore odit quod temporibus voluptas assumenda,
          perferendis dicta vitae sint, iste quibusdam totam vero rerum
          necessitatibus ab soluta?
        </p>
        </div>
      </>  
    );
}