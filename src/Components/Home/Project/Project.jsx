import img1 from "../../../assets/Screenshot 2023-12-12 182415.png";
import img2 from "../../../assets/Screenshot 2023-12-10 182032.png";
import img3 from "../../../assets/Screenshot 2023-12-12 182101.png";
import img4 from "../../../assets/Screenshot 2023-12-12 182140.png";
const Project = () => {
  return (
    <div className="bg-black grid text-center items-center pt-5">
      <h2 className="mb-7 text-2xl font-semibold font-serif text-slate-100 "> My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-2">
        {/* card 1 */}
        <div className=" mx-auto flex flex-col justify-center items-center p-5 bg-gray-900">
          <img src={img1} alt="" className="w-52 h-52 md:w-full md:h-72 "/>
        
          <button
            className="btn w-52  justify-center bg-slate-200 text-black"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Details
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle "
          >
            <div className="modal-box bg-slate-200 text-black">
               <div className="grid text-xl font-serif ">
                <a href="https://tech-project-b747f.web.app">Live Link</a>
                <a href="https://github.com/neelimapriya/tech-gadget-client">Frontend Code</a>
                <a href="https://github.com/neelimapriya/tech-gadget-server"> Backend Code</a>
               </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn ">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        {/* card 1 */}
        <div className=" mx-auto flex flex-col justify-center items-center  p-5 bg-gray-900">
          <img src={img2} alt="" className="w-52 h-52 md:w-full md:h-72 "/>
        
          <button
            className="btn w-52  justify-center bg-slate-200 text-black"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Details
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle "
          >
            <div className="modal-box bg-slate-200 text-black">
               <div className="grid text-xl font-serif ">
                <a href="https://shiny-kitten-bcfe80.netlify.app">Live Link</a>
                <a href="https://github.com/neelimapriya/hotel-booking-client">Frontend Code</a>
                <a href="https://github.com/neelimapriya/hotel-booking-server"> Backend Code</a>
               </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn ">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        {/* card 3 */}
        <div className=" mx-auto flex flex-col justify-center items-center  p-5 bg-gray-900">
          <img src={img3} alt="" className="w-52 h-52 md:w-full md:h-72 "/>
        
          <button
            className="btn w-52  justify-center bg-slate-200 text-black"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Details
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle "
          >
            <div className="modal-box bg-slate-200 text-black">
               <div className="grid text-xl font-serif ">
                <a href="https://shopify-a15bc.web.app/">Live Link</a>
                <a href="https://github.com/neelimapriya/shopify-client">Frontend Code</a>
                <a href="https://github.com/neelimapriya/shopify-server"> Backend Code</a>
               </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn ">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        {/* card 4 */}
        <div className=" mx-auto flex flex-col justify-center items-center  p-5 bg-gray-900">
          <img src={img4} alt="" className="w-52 h-52 md:w-full md:h-72 "/>
        
          <button
            className="btn w-52  justify-center bg-slate-200 text-black"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Details
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle "
          >
            <div className="modal-box bg-slate-200 text-black">
               <div className="grid text-xl font-serif ">
                <a href="https://star-box-ticket.web.app">Live Link</a>
                <a href="https://github.com/neelimapriya/concert-ticket-booking">Frontend Code</a>
                
               </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn ">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
