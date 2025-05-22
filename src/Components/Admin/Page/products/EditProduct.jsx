import React, { useEffect, useState } from 'react'
import { Link, useActionData, useFetcher, useParams, useSearchParams } from 'react-router-dom'
import { products } from '../../../../../test_products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditProduct = () => {
  const {id} = useParams();
  const currentProduct = products.find((p) => p._id === Number(id));
  const [addOption, setAddOption] = useState(false);
  const [product, setProduct] = useState(currentProduct);
  const [option, setOption] = useState({});
  const [feature, setFeature] = useState('');
  const [images, setImages] = useState([]);

  let imgs = [];
  product.images.map((img) => {
    imgs.push({file: null, url: img});
  });
  useEffect(() => {
    setImages(imgs);
  }, []);

  const onInput = (e, isNum) => {
    let value = e.target.value;
    if ( isNum ){
      const reg = new RegExp('^[0-9]+$');
      if ( reg.test(value) || value == '')
      {
        value = Number(value);
      } else return;
    }
    setProduct( p => ({...p, [e.target.name]:value}));
  }

  const onOptionChange = (e, isNum) => {
    let value = e.target.value;
    if ( isNum ){
      const reg = new RegExp('^[0-9]+$');
      if ( reg.test(value) || value == ''){
        value = Number(value);
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
    const i = window.location.hash;
    let index = 0;
    if ( !i ) index = 0;
    index = Number(i.charAt(i.length - 1));
    const url = URL.createObjectURL(e.target.files[0]);
    const tempImgs = [...images];
    console.log(tempImgs, index);
    tempImgs[index].file = e.target.files[0];
    tempImgs[index].url = url;
    setImages(tempImgs);
    
  }

  const addImage = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImages((img) => ([...img, {file:e.target.files[0], url: url}]));
  }

  const deleteImage = (index) => {
    const tempImgs = images.filter((img, i) => i !== index);
    setImages(tempImgs);
  }


  return (
    <div className='bg-gray-300 w-full flex flex-col gap-2 items-center py-4'>
        <h1>Edit Product</h1>
        <div className='w-[400px] flex flex-col gap-4 bg-white p-6 rounded-sm'>
            
            <input value={product.name ? product.name : ''} onChange={(e) => {onInput(e, false)}} placeholder='product fullname' type='text' name='name' className=' w-full bg-stone-200 rounded-md p-2'/>
            <input value={product.shortName ? product.shortName : ''} onChange={(e) => {onInput(e, false)}} placeholder='short name' type='text' name='shortName' className=' w-full bg-stone-200 rounded-md p-2' />
            <input value={product.price ? product.price : ''} onChange={(e) => {onInput(e, true)}} placeholder='price' type='text' name='price' className=' w-full bg-stone-200 rounded-md p-2' />
            <input value={product.discount ? product.discount : ''} onChange={(e) => {onInput(e, true)}} placeholder='discount' type='text' name='discount' className=' w-full bg-stone-200 rounded-md p-2' />
            <input value={product.quantity ? product.quantity : ''} onChange={(e) => {onInput(e, true)}} placeholder='quantity' type='text' name='quantity' className=' w-full bg-stone-200 rounded-md p-2' />
            <textarea value={product.description ? product.description : ''} onChange={(e) => {onInput(e, false)}} placeholder='description' name='description' className=' w-full h-[150px] bg-stone-200 rounded-md p-2'></textarea>
            <input value={product.quantity ? product.quantity : ''} onChange={(e) => {onInput(e, false)}} placeholder='Return Policy' type='text' name='returnPolicy' className=' w-full bg-stone-200 rounded-md p-2' />
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
                    <div className='flex mt-4 gap-2 flex-wrap'>
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
                    Change Image
                  </label>
                </div>
                {
                  images.length < 4 && 
                  <div className='mt-2'>
                  <input onChange={(e) => {addImage(e)}} className='hidden' id='add-image' type='file' accept='image/*' />
                  <label  className='btn btn-primary btn-soft ' htmlFor='add-image'>
                    Add New Image
                  </label>
                </div>
                }
              </div>

              <div className='carousel px-2 py-2 gap-4 mt-2 carousel-horizontal rounded-box h-72 w-full'>
                {
                  images.length <= 0 ? 
                  <div className='w-full h-full bg-gray-300 flex  justify-center items-center'>Add Image</div>
                  : <>
                  {
                    images.map((img, index) => {
                      return <div 
                      id={"image" + index}
                      key={img.url + "+" + index + "+image"} className='carousel-item indicator overflow-visible bg-gray-300 rounded-lg w-full h-full flex justify-center'>

                        <button
                        onClick={() => {deleteImage(index)}}
                        className='indicator-item bg-white w-5 h-5 rounded-full flex justify-center items-center text-base tooltip tooltip-left tooltip-error cursor-pointer status status-error' >
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

            <div className='flex items-center gap-2'>
              <button className='btn btn-primary'>Edit</button>
              <Link 
              to='../'
              className='btn btn-error btn-soft'>Cancel</Link>
            </div>
        </div>
    </div>
  )
}

export default EditProduct