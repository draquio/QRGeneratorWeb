import React, {useRef} from 'react'
import "./Sidebar.scss"
import { Image, Button, Icon } from "semantic-ui-react";
import qr from "../../assets/qr-code.png";
import { useSelector } from "react-redux"
import { QRCodeSVG } from "qrcode.react";
import saveimage from 'save-svg-as-png';

export function Sidebar() {
  const qrCodeRef = useRef(null);
  const QR = useSelector(state => state.qr);
  const handleDownloadClick = () => {
    const qrsvg = qrCodeRef.current.querySelector('svg');
    saveimage.saveSvgAsPng(qrsvg, 'codigo-qr.png', { scale: 20 });
  }
  return (
    <div className='Sidebar_main'>
      {!QR.qrvalue ? 
      <Image className='qrimg' src={qr} size="medium" alt="Generador de QR gratuito" />
      :
      <div ref={qrCodeRef}>
      <QRCodeSVG 
        value={QR.qrvalue}
        size={300}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
        imageSettings={{
          height: 24,
          width: 24,
          excavate: true,
        }}
      />
      </div>
      }
      <Button color='black' animated="vertical" disabled={QR.qrvalue===null} onClick={handleDownloadClick}>
      <Button.Content  visible>Descargar</Button.Content>
      <Button.Content hidden>
        <Icon name='download' />
      </Button.Content>
    </Button>
    </div>
  )
}
