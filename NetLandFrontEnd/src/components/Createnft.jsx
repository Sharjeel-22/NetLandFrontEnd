import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { BigNumber, ethers, getDefaultProvider } from "ethers";
import React, { useEffect, useState } from "react";
import logger from "../Logs/logger";
import toast, { Toaster } from "react-hot-toast";
import { createAlchemyWeb3 } from "@alch/alchemy-web3"
import NTFsha from "../artifacts/contracts/NTFsha.sol/NTFsha.json";
var axios = require('axios');
var FormData = require('form-data');

require("dotenv").config()

function Createnft() {
  
  const { library, account } = useWeb3React();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [API_URL,setAPI_URL] = useState(process.env.API_URL)
  const [itemname, setItemName] = useState("");
  const [itemdescription, setItemDescription] = useState("");
  const [itemFile, setItemFile] = useState("");
  
  //const [PUBLIC_KEY,setPUBLIC_KEY] = useState(process.env.PUBLIC_KEY)
  //const [PRIVATE_KEY,setPRIVATE_KEY] = useState(process.env.PRIVATE_KEY)

  const limit = 12;
  const PUBLIC_KEY = "0xDf26e11916aeE3BE457FcB98956304d15fc3E407"
  const web3 = createAlchemyWeb3("https://eth-ropsten.alchemyapi.io/v2/NuomHcyU1hTb_Yq4XSmPqHYb2CuA-VOA")
  const PRIVATE_KEY = "ddc40d31fc12febf1c7010f428fcba741738291f559a9d27488bd688e5fcb3a3"
  const contractAddress = "0x15350dC9e0FF98c2cB702841dE50a27f9CcAC163";
  const nftContract = new web3.eth.Contract(NTFsha.abi, contractAddress)

  useEffect(() => {
    try {
      
    } catch (error) {
      logger.error(error);
    }
  }, [library]);

  async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
  
    //the transaction
    const tx = {
      from: PUBLIC_KEY,
      to: contractAddress,
      nonce: nonce,
      gas: 500000,
      data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    }
    console.log(PRIVATE_KEY);
    web3.eth.getBalance()
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          function (err, hash) {
            if (!err) {
              console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
              )
            } else {
              console.log(
                "Something went wrong when submitting your transaction:",
                err
              )
            }
          }
        )
      })
      .catch((err) => {
        console.log("Promise failed:", err)
      })
  }


  const submitButton = async(e) => {
    console.log(itemFile);
    var data = new FormData();
    data.append('file', itemFile);

    var config = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: { 
        'pinata_api_key': '8f083e568565d420a818', 
        'pinata_secret_api_key': '95066398e090165b485d54031e8dc0750a97dabcdd8a6904bf7635ea1e94fc8d'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      if(response.data){

        pinmetajson(itemname,itemdescription,"https://gateway.pinata.cloud/ipfs/"+response.data.IpfsHash)

      }
    })
    .catch(function (error) {
      console.log(error);
    });


   //await mintNFT("https://gateway.pinata.cloud/ipfs/QmfNGBBV9BK8q96gMkJkws5Q12QY7LuzNt5cX6s8R3PCKz");
  }
  
  function pinmetajson(name,description,imagePath){

    var data = JSON.stringify({
      "description": description,
      "image": imagePath,
      "name": name
    });
    
    var config = {
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
      headers: { 
        'pinata_api_key': '8f083e568565d420a818', 
        'pinata_secret_api_key': '95066398e090165b485d54031e8dc0750a97dabcdd8a6904bf7635ea1e94fc8d', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
    
      mintNFT("https://gateway.pinata.cloud/ipfs/"+response.data.IpfsHash);
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }
  return (
      <main className="main">
        <div className="main__author" data-bg="assets/img/authors/banner.jpg" />
        <div className="container">
          <div className="row row--grid">
            <div className="col-12 col-xl-3">
              <div className="author author--page">
                <div className="author__meta">
                  <a href="author.html" className="author__avatar author__avatar--verified">
                    <img src="assets/img/avatars/avatar-1.jpg" alt="" />
                  </a>
                  <h1 className="author__name"><a href="author.html">Susa Condrey</a></h1>
                  <h2 className="author__nickname"><a href="author.html">@condrey21</a></h2>
                  <p className="author__text">There are many variations of passages orem psum available but the
                    majority have suffered alteration.</p>
                  <div className="author__code">
                    <input type="text" defaultValue="4fgddgwdfgfew5345353fdfdf3454edrgertt4rgre4" id="author-code" />
                    <button type="button">
                      <span>Copied</span>
                      <i className="far fa-copy" />
                    </button>
                  </div>
                  <a href="#" className="author__link"> <i className="far fa-globe" /> https://example.com</a>
                  <div className="author__social">
                    <a href="#" className="fab fa-facebook-f" />
                    <a href="#" className="fab fa-twitter" />
                    <a href="#" className="fab fa-instagram" />
                    <a href="#" className="fab fa-linkedin-in" />
                  </div>
                  <div className="author__wrap">
                    <div className="author__followers">
                      <p>5.5k</p>
                      <span>Followers</span>
                    </div>
                    <button className="author__follow" type="button">Follow</button>
                  </div>
                </div>
              </div>
            </div>
            {/* create */}
            <div className="col-12 col-xl-9">
              {/* title */}
              <div className="main__title main__title--create">
                <h2>Create New Item</h2>
              </div>
              {/* end title */}
              {/* create form */}
              <form  className="sign__form sign__form--create">
                <div className="row">
                  <div className="col-12">
                    <h4 className="sign__title">Upload file</h4>
                  </div>
                  <div className="col-12">
                    <div className="sign__file">
                      <label id="file1" htmlFor="sign__file-upload"> <i className="far fa-upload" /> Upload File (e. g. Image, Audio, Video) </label>
                      <input data-name="#file1" id="sign__file-upload" name="file" onChange={e => setItemFile(e.target.files[0])} className="sign__file-upload" type="file" accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg" />
                    </div>
                  </div>
                  <div className="col-12">
                    <h4 className="sign__title">Item details</h4>
                  </div>
                  <div className="col-12">
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="itemname">Item name</label>
                      <input id="itemname" type="text" name="itemname"  value={itemname} onChange={e => setItemName(e.target.value)}  className="sign__input" placeholder="e. g. 'Fantacy Flower'" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="sign__group">
                      <label className="sign__label" htmlFor="description">Description</label>
                      <textarea id="description" name="description"  onChange={e => setItemDescription(e.target.value)} className="sign__textarea" placeholder="e. g. 'After purchased you will get downloadable zip file'" />
                    </div>
                  </div>

                  <div className="col-12 col-xl-3">
                    <button type="button" className="sign__btn" onClick={submitButton}>Create item</button>
                  </div>
                </div>
              </form>
              {/* end create form */}
            </div>
            {/* end create */}
          </div>
        </div>
      </main>
      );
    }
    
export default Createnft;