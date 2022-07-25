import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
import { Col, Row, Button, Form} from "react-bootstrap";
import AlertDismissible from './alert/alertDismissible';
import PreLoader from './components/preloader';
import Collections from './components/collections';
import GalleryView from './components/galleryview';

function App({connection,variant, cluster}) {
  const { publicKey } = useWallet();

  // input ref
  const inputRef = useRef();

  // state change
  useEffect(() => {
    setNfts([]);
    setView("collection");
    setGroupedNfts([]);
    setShow(false);
     if (publicKey) {
       inputRef.current.value = publicKey;
     }
  }, [publicKey, connection]);

  const [nfts, setNfts] = useState([]);
  const [groupedNfts, setGroupedNfts] = useState([]);
  const [view, setView] = useState('collection');
  //alert props
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  //loading props
  const [loading, setLoading] = useState(true);


  const getNfts = async (e) => {
    e.preventDefault();

    setShow(false);

    let address = inputRef.current.value;

    if (address.length === 0) {
      address = publicKey;
    }

    if (!isValidSolanaAddress(address)) {
      setTitle("Invalid address");
      setMessage("Please enter a valid Solana address or Connect your wallet");
      setLoading(false);
      setShow(true);
      return;
    }

    const connect = createConnectionConfig(connection);

    setLoading(true);
    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress: address,
      connection: connect,
      serialization: true,
    });


    if (nftArray.length === 0) {
      setTitle("No NFTs found in " + title);
      setMessage("No NFTs found for address: " + address);
      setLoading(false);
      setView('collection');
      setShow(true);
      return;
    }

    const metadatas = await fetchMetadata(nftArray);
    var group = {};

    for (const nft of metadatas) {
      console.log(nft);
      if (group.hasOwnProperty(nft.data.symbol)) {
        group[nft.data.symbol].push(nft);
      } else {
        group[nft.data.symbol] = [nft];
      }
    }
    setGroupedNfts(group);
    setLoading(false);
    return setNfts(metadatas);
  };

  const fetchMetadata = async (nftArray) => {
    let metadatas = [];
    for (const nft of nftArray) {
      console.log(nft);
      try {
        await fetch(nft.data.uri)
        .then((response) => response.json())
        .then((meta) => { 
          metadatas.push({...meta, ...nft});
        });
      } catch (error) {
        console.log(error);
      }
    }
    return metadatas;
  };

  return (
    <div>
      <div className="main">
        <Row className="inputForm">
          <Col lg="2"></Col>
          <Col xs="12" md="12" lg="5">
            <Form.Control
              type="text"
              ref={inputRef}
              placeholder="Wallet address"
            />
          </Col>
          <Col xs="12" md="12" lg="3" className="d-grid">
            <Button variant={variant} type="submit" onClick={getNfts}>
              Get NFTs from {cluster}
            </Button>
          </Col>
          <Col lg="1"></Col>
          <Col xs="12" md="12" lg="1">
            {view === "nft-grid" && (
              <Button
                size="md"
                variant="danger"
                onClick={() => {
                  setView("collection");
                }}
              >
                Close
              </Button>
            )}
          </Col>
        </Row>

        {loading ? (
          <div className="loading">
            <PreLoader variant={variant} />
          </div>
        ) : view === "collection" ? (
          <Collections
            groupedNfts={groupedNfts}
            setNfts={setNfts}
            variant={variant}
            setView={setView}
          />
        ) : (
          <GalleryView nfts={nfts} />
        )}
        {show && (
          <AlertDismissible title={title} message={message} setShow={setShow} />
        )}
      </div>
    </div>
  );
}

export default App;
