// pages/index.js
import { Suspense } from "react";
import QRCodeGenerator from "../../components/qr-code/qrcode";

export default function QRCodePage() {
  return (
    <Suspense fallback={<div>Loading QR code...</div>}>
      <QRCodeGenerator />
    </Suspense>
  );
}
