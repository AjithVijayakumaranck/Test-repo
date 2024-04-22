import React, { useState } from 'react'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx';
import Select from 'react-select'


const AdvertisementForm = () => {

  //states
  const [File, SetFile] = useState([]);
  const [Error , SetError] = useState({
     imagefile:""
    })

  //REACT SELECT OPTIONS
  const options = [
    { value: "2", label: "2X size" },
    { value: "3", label: "3X size" },
    { value: "4", label: "4X size" }
  ]
  
 //upload file
  const uploadFile = (e) => {
    const files = e.target.files;

    if (File.length  < 1) {
      SetFile([...File, ...files]);
      SetError({ ...Error, imgfile: "" })
    } else {
      SetError({ ...Error, imgfile: `You can only upload one image` });
      e.target.value = "";
    }
  }


  return (
    <div>
      <form action="#">
        <div >
          <label> Title
            <span className="star">*</span>{" "}
          </label>
          <div >
            <input
              type="text"
              name="title"
              value="helll"
            // onChange={(e) => { SetProductData({ ...ProductData, title: e.target.value }) }}
            />
            <span>hello</span>
            <p> Mention the key features of item(eg. Brand, Model,Typeetc.) </p>
          </div>
        </div>

        <div>
          <label>
            Advertisement Size
          </label>
          <div >
            <Select
              options={options}
              name="Advertisement Size"
            // onChange={(e) => { SetOtherDet({ ...OtherDet, [Input.label]: e.value }) }}
            />
          </div>
        </div>

        <div>
          <label>
            Category
          </label>
          <div >
            <Select
              options={options}
              name="Advertisement Size"
            // onChange={(e) => { SetOtherDet({ ...OtherDet, [Input.label]: e.value }) }}
            />
          </div>
        </div>

        <div>
          <label>
            subcategory
          </label>
          <div >
            <Select
              options={options}
              name="Advertisement Size"
            // onChange={(e) => { SetOtherDet({ ...OtherDet, [Input.label]: e.value }) }}
            />
          </div>
        </div>

        {/* image uploading */}

        <div 
        // className={Style.row}
        >
            <label>
              Images <span className="star">*</span>{" "}
            </label>
            <div >
              <label For="file-input">  {" "}  <MdOutlineAddAPhoto />  </label>

              <input
                type="file"
                onChange={(e) => uploadFile(e)}
                id="file-input"
                multiple
              />

              {/* image viewers */}
              {File.map((eachImage, index) => {
                return (
                  <div key={index} 
                  // className={Style.image_sec}
                  >
                    <img src={eachImage
                      ? URL.createObjectURL(eachImage)
                      : null
                    }
                      alt={`image ${index}`}
                    />

                    <div 
                    // className={Style.clearbtn}
                    >
                      <button> {" "} <RxCross2 onClick={() => { SetFile([]) }} />{" "} </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <span style={{ color: 'red', fontSize: '14px' }}>{Error?.imgfile}</span>
            </div>
            <div>
              <p>
                You can only upload up to one image.
                Choose multiple photos by choosing your best photo first as displayed in front and then add rest of photos with
                different angles to shows specifications or damages if any.
              </p>
            </div>
          </div>
      </form>
    </div>
  )
}

export default AdvertisementForm