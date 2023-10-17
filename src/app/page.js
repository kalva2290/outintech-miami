import React from 'react';
import Head from 'next/head';

const ARHunt = () => {
    return (
        <div>
            <Head>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
            </Head>

            <div style={{ margin: '0px', overflow: 'hidden' }}>
                <a-scene embedded arjs='sourceType: webcam;'>
                    <a-barcode-marker value="5"> {/* For example, using barcode value 5 */}
                        {/* You can replace this with your model or any A-Frame entity */}
                        <a-box position="0 0.5 0" material="color: red;"></a-box>
                    </a-barcode-marker>
                    <a-entity camera></a-entity>
                </a-scene>
            </div>
        </div>
    );
}

export default ARHunt;