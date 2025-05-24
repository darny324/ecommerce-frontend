import { faCheck, faCheckCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { p } from 'framer-motion/client';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { uploadImagesToCloudinary } from '../../../../../upload_image';

const CreateProduct = () => {
  const [addOption, setAddOption] = useState(false);
  const [product, setProduct] = useState({});
  const [option, setOption] = useState({});
  const [feature, setFeature] = useState('');
  const [images, setImages] = useState([]);
  const [showStatus, setShowStatus] = useState(false);
  const status = useRef(false);
  const [showCategory, setShowCategory] = useState(false);

  const onInput = (e, isNum) => {
    let value = e.target.value;
    let reg = (/^(([0-9.]?)*)+$/);

    if ( isNum ){
      if ( reg.test(value) || value == '')
      {
        setProduct( p => ({...p, [e.target.name]:value}));
        return;
      } else return;
    }
    setProduct( p => ({...p, [e.target.name]:value}));
  }

  const onOptionChange = (e, isNum) => {
    let value = e.target.value;
    if ( isNum ){
      let reg = (/^(([0-9.]?)*)+$/);

      if ( reg.test(value) || value == ''){
        setOption( p => ({...p, [e.target.name]:value}));
        return;
      } else {
        return;
      }
    }
    setOption( p => ({...p, [e.target.name]:value}));
  }

  const handleAddOption = () => {
      if ( product.options?.length > 0)
        setProduct(p => ({...p, options: [...p.options, option]}));
      else 
        setProduct(p => ({...p, options: [option]}));
      setOption({});
      setAddOption(false);
    
  }

  const onAttributesChange = (e) => {
    const {name, value} = e.target;
    setProduct( p => ({...p, attributes: {...p.attributes, [name]:value}}));
  }

  const deleteOption = (label) => {
    const options = product.options.filter((op) => op.label !== label);
    setProduct(p => ({...p, options: options}));
  }

  const handleAddFeature = () => {
    if ( product.features) 
      setProduct(p => ({...p, features: [...p.features, feature]}));
    else setProduct(p => ({...p, features: [feature]}));
    setFeature('');
  }

  const onImageChange = (e) => {
    if ( images.length < 4 ){
      const url = URL.createObjectURL(e.target.files[0]);
      setImages(img => ([...img, {file:e.target.files[0], url: url}]));
    }
  }

  const handleCreateProduct = async () => {
    try {
      const imageUrls = await uploadImagesToCloudinary(images);
      console.log(imageUrls);
      const options = [];
      if ( product.options ){
        for ( let i = 0; i < product.options.length; i++ ){
          options.push({
            label: product.options[i].label, 
            quantity: parseInt(product.options[i].quantity),
            price: parseFloat(product.options[i].price),
          });
        }
      }
      const res = await axios.post(`http://localhost:5000/api/v1/ecommerce/products`, {
        name: product.name, 
        shortName: product.shortName, 
        category: product.category, 
        price: parseFloat(product.price), 
        quantity: parseInt(product.quantity), 
        discount: parseFloat(product.discount), 
        attributes: product.attributes, 
        features: product.features, 
        returnPolicy: product.returnPolicy, 
        description: product.description, 
        images: imageUrls, 
        options: options, 
        main_image_option: product.main_image_option - 1, 
        featured: product.featured ? product.featured : false,
      });
      if ( res.data.status ){
        setShowStatus(true);
        status.current = true;
      }
    } catch (err){
      setShowStatus(true);
      status.current = false;
      console.log(err, "Error in Creating Product");
    }
    setTimeout(() => {
      setShowStatus(false);
    }, 1000 * 3);
  }

  return (
    <div className='bg-gray-300 w-full flex flex-col gap-2 items-center py-4'>
        <h1>Create Product</h1>
        <div className='w-[400px] flex flex-col gap-4 bg-white p-6 rounded-sm'>
            
            <input value={product.name ? product.name : ''} onChange={(e) => {onInput(e, false)}} placeholder='product fullname' type='text' name='name' className=' w-full bg-stone-200 rounded-md p-2'/>
            <input value={product.shortName ? product.shortName : ''} onChange={(e) => {onInput(e, false)}} placeholder='short name' type='text' name='shortName' className=' w-full bg-stone-200 rounded-md p-2' />
            <input value={product.price ? product.price : ''} onChange={(e) => {onInput(e, true)}} placeholder='price' type='text' name='price' className=' w-full bg-stone-200 rounded-md p-2' />
            <input value={product.discount ? product.discount : ''} onChange={(e) => {onInput(e, true)}} placeholder='discount' type='text' name='discount' className=' w-full bg-stone-200 rounded-md p-2' />
            <input value={product.quantity ? product.quantity : ''} onChange={(e) => {onInput(e, true)}} placeholder='quantity' type='text' name='quantity' className=' w-full bg-stone-200 rounded-md p-2' />
            <textarea value={product.description ? product.description : ''} onChange={(e) => {onInput(e, false)}} placeholder='description' name='description' className=' w-full h-[150px] bg-stone-200 rounded-md p-2'></textarea>
            <input value={product.returnPolicy ? product.returnPolicy : ''} onChange={(e) => {onInput(e, false)}} placeholder='Return Policy' type='text' name='returnPolicy' className=' w-full bg-stone-200 rounded-md p-2' />

            <div className='relative'>
              <label className='block text-sm text-gray-500 ml-2 mb-1'>Category</label>
              <button 
              onClick={() => setShowCategory(!showCategory)}
              className='btn btn-sm btn-neutral btn-soft'>
                {product.category ? product.category : 'No Option'} 
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {
                showCategory && 
                <ul className='absolute menu z-1 bg-white gap-3 shadow-sm rounded-md p-2'>
                  <li
                  onClick={() => {
                    setShowCategory(false);
                    setProduct((p) => ({...p, category:'Desktops & Laptops'}))
                  }}
                  className='p-1 hover:bg-gray-200 rounded-md cursor-pointer'>Desktops & Laptops</li>
                  <li
                  onClick={() => {
                    setShowCategory(false);
                    setProduct((p) => ({...p, category:'Televisions & Monitors'}))
                  }}
                  className='p-1 hover:bg-gray-200 rounded-md cursor-pointer'>Televisions & Monitors</li>
                  <li
                  onClick={() => {
                    setShowCategory(false);
                    setProduct((p) => ({...p, category:'Gaming Consoles'}))
                  }}
                  className='p-1 hover:bg-gray-200 rounded-md cursor-pointer'>Gaming Consoles</li>
                  <li
                  onClick={() => {
                    setShowCategory(false);
                    setProduct((p) => ({...p, category:'Smartphones & Tablets'}))
                  }}
                  className='p-1 hover:bg-gray-200 rounded-md cursor-pointer'>Smartphones & Tablets</li>
                  <li
                  onClick={() => {
                    setShowCategory(false);
                    setProduct((p) => ({...p, category:'Computer Accessories'}))
                  }}
                  className='p-1 hover:bg-gray-200 rounded-md cursor-pointer'>Computer Accessories</li>
                </ul>
              }
            </div>
            <div>
                <button 
                onClick={() => {setAddOption(!addOption)}}
                className=' text-sm rounded-md btn btn-neutral btn-soft'>
                    + Add Option
                </button>
                {
                  addOption && <div className='bg-gray-300 rounded-lg p-4 mt-4 flex flex-col gap-2'>
                  
                    <input value={option.label ? option.label : ''} onChange={(e) => {onOptionChange(e, false)}} placeholder='Label' type='text' name='label' className=' w-full bg-stone-200 rounded-md p-2' />
                    <input value={option.price ? option.price : ''} onChange={(e) => {onOptionChange(e, true)}} placeholder='Price' type='text' name='price' className=' w-full bg-stone-200 rounded-md p-2' />
                    <input value={option.quantity ? option.quantity : ''} onChange={(e) => {onOptionChange(e, true)}} placeholder='Quantity' type='text' name='quantity' className=' w-full bg-stone-200 rounded-md p-2' />
                    <div>
                    <button onClick={handleAddOption} className='btn btn-primary w-20 mr-2'>Save</button>
                    <button onClick={() => {setAddOption(false)}} className='btn btn-error btn-soft w-20'>Cancel</button>
                    </div>
                    
                  </div>
                }
                <div >
                  {
                    !addOption && product.options?.length > 0 && 
                    <div className='flex mt-4 gap-2 flex-auto'>
                      {
                        product.options.map( option => {
                          return <div key={option.label + "+option"}
                          className='shadow-lg w-28 rounded-md flex flex-col bg-gray-200 gap-2 p-2 text-sm relative'
                          >
                            <FontAwesomeIcon
                            onClick={() => {deleteOption(option.label)}}
                            icon=' fa-solid fa-xmark' className='absolute -right-1 -top-1 text-base text-white cursor-pointer w-4 h-8 rounded-full bg-stone-400' />
                            <span className='overflow-hidden w-full text-ellipsis whitespace-nowrap'>{option.label} asdfasdfasdfasdfasdf</span>
                            <span className='text-accent'>${option.price}</span>
                            <span className='text-error'>{option.quantity} available</span>
                          </div>
                        })
                      }
                    </div> 
                  }
                </div>
            </div>

            <div>
                <h2>Attributes</h2>
                <div className='flex flex-col gap-2 mt-2'>
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.brand ? product.attributes.brand : ''} placeholder='Brand' type='text' name='brand' className=' w-full bg-stone-200 rounded-md p-2' />
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.modelNumber ? product.attributes.modelNumber : ''} placeholder='Model Number' type='text' name='modelNumber' className=' w-full bg-stone-200 rounded-md p-2' />
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.releasedYear ? product.attributes.releasedYear : ''} placeholder='Released Year' type='text' name='releasedYear' className=' w-full bg-stone-200 rounded-md p-2' />
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.warranty ? product.attributes.warranty : ''} placeholder='warranty' type='text' name='warranty' className=' w-full bg-stone-200 rounded-md p-2' />
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.processor ? product.attributes.processor : ''} placeholder='Processor' type='text' name='processor' className=' w-full bg-stone-200 rounded-md p-2' />
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.ram ? product.attributes.ram : ''} placeholder='RAM' type='text' name='ram' className=' w-full bg-stone-200 rounded-md p-2' />
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.storage ? product.attributes.storage : ''} placeholder='Storage' type='text' name='storage' className=' w-full bg-stone-200 rounded-md p-2' />
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.batteryLife ? product.attributes.batteryLife : ''} placeholder='Battery Life' type='text' name='batteryLife' className=' w-full bg-stone-200 rounded-md p-2' />
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.graphicsCard ? product.attributes.graphicsCard : ''} placeholder='Graphics Card' type='text' name='graphicsCard' className=' w-full bg-stone-200 rounded-md p-2' />
                  <input onChange={(e) => {onAttributesChange(e)}} value={!product.attributes ? '' : product.attributes.material ? product.attributes.material : ''} placeholder='Material' type='text' name='material' className=' w-full bg-stone-200 rounded-md p-2' />
                </div>
            </div>

            <div>
              <h2>Features</h2>
              <div className='flex flex-col gap-3'>
                {
                  product.features?.length > 0 && 
                  <>
                  {
                    product.features.map((feature) => {
                      return <div 
                      key={feature + "+features"}
                      className='w-full flex justify-between bg-stone-200 items-center py-2 px-2 rounded-lg'>
                        <span>{feature}</span>
                        <button
                        onClick={() => {
                          const f = product.features.filter((fea) => fea !== feature);
                          setProduct(p => ({...p, features: f}));
                        }}
                        className='btn btn-error btn-sm'>
                          <FontAwesomeIcon icon={'fa-solid fa-xmark'}  />
                        </button>
                      </div>
                    })
                  }
                  </>
                }
                <div className='flex'>
                  <input 
                  value={feature}
                  onChange={(e) => {setFeature(e.target.value)}}
                  placeholder='Add New Feature' className=' w-full bg-stone-200 rounded-md p-2' />
                  <button 
                  onClick={() => {handleAddFeature();}}
                  className='btn btn-success ml-2'>
                    <FontAwesomeIcon icon='fa-solid fa-check-circle' />
                  </button>
                </div>
              </div>
            </div>

            <div className='w-full'>
              <h2>Images</h2>
              <div>
                <div>
                <input onChange={(e) => {onImageChange(e)}} className='hidden' id='product-image' type='file' accept='image/*' />
                <label  className='btn btn-primary btn-soft ' htmlFor='product-image'>
                  Add New Image 
                </label>
                </div>
              </div>

              <div className='carousel mt-2 carousel-horizontal rounded-box h-72 w-full'>
                {
                  images.length <= 0 ? 
                  <div className='w-full h-full bg-gray-300 flex justify-center items-center'>Add Image</div>
                  : <>
                  {
                    images.map((img, index) => {
                      return <div 
                      id={"image" + index}
                      key={img.url + "+" + index + "+image"} className='carousel-item bg-gray-300 rounded-lg w-full h-full flex justify-center relative'>
                        <div>
                          <FontAwesomeIcon 
                          onClick={() => {
                            setProduct((p) => ({...p, main_image_option:index + 1}));
                          }}
                          icon={faCheckCircle} className={`
                          absolute text-lg cursor-pointer left-1 top-1 ${product.main_image_option ? `${product.main_image_option === index + 1? 'text-blue-400' : ''}` : ""}`} />
                        </div>
                        <button
                          onClick={() => {
                            const imgs = images.filter((img,i) => i !== index);
                            setImages((i) => imgs);
                          }}
                          className='indicator-item absolute right-1 top-1 bg-white w-5 h-5 rounded-full flex justify-center items-center text-base tooltip tooltip-left tooltip-error cursor-pointer status status-error' >
                            <div className='tooltip-content'>Delete Image</div>
                          <FontAwesomeIcon icon='fa-solid fa-xmark'/>
                        </button>
                        <img src={img.url} className='w-full h-full object-contain rounded-lg' />
                      </div>
                    })
                  }
                  </>
                }
              </div>
                {
                  images?.length > 0 && 
                  <div className='flex justify-center w-full gap-2 py-2'>
                    {
                      images.map((img, index) => {
                        return <a key={"reference-image" + index} className='btn btn-xs btn-soft btn-neutral' href={"#image"+index}>{index + 1}</a>
                      })
                    }
                  </div>
                }
            </div>

            <div>
              <input type='checkbox' className='checkbox' checked={product.featured ? product.featured : false} onChange={(e) => {
                setProduct((p) => ({...p, featured: p.featured ? !p.featured:true}));
              }}/>
              <label className='font-semibold ml-2'>Shoud Featured</label>
            </div>

            <div className='flex items-center gap-2'>
              <button className='btn btn-primary'
              onClick={() => {handleCreateProduct();}}
              >Create</button>
              <Link 
              to='../'
              className='btn btn-error btn-soft'>Cancel</Link>
            </div>
            {
              showStatus && 
              <div>
              {status.current ? 
                <div className='text-base text-success'>Successfull Added the Product</div>
                :<div className='text-base text-error'>Error in Adding the product</div>  
              }
              </div>
            }
        </div>
    </div>
  )
}

// brand: String, // e.g., "Apple", "Samsung"
// modelNumber: String, // e.g., "iPhone 14 Pro Max"
// releaseYear: Number, // e.g., 2024
// warranty: String, // e.g., "1 year", "2 years"

// // Technical specifications
// processor: String, // e.g., "Intel Core i7", "Snapdragon 8 Gen 2"
// ram: String, // e.g., "16GB", "8GB LPDDR5"
// storage: String, // e.g., "512GB SSD", "1TB HDD"
// batteryLife: String, // e.g., "10 hours", "5000mAh"

// // Display & Graphics
// graphicsCard: String, // e.g., "NVIDIA RTX 4060", "AMD Radeon 6800Man
// // Build & Design
// material: String, // e.g., "Aluminum", "Glass", "Carbon Fiber"

export default CreateProduct