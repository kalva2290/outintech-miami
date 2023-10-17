
import React from 'react';
import Head from 'next/head';

const ARHunt = () => {
    return (
        <div>
            <Head>
                <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
                <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.7.8/aframe/build/aframe-ar.js"></script>
            </Head>
            
            <div style={{ overflow: 'hidden' }}>
                <a-scene embedded arjs>
                    <a-marker preset="hiro">
                        <a-box position='0 0.5 0' material='color: red;'></a-box>
                    </a-marker>
                    <a-entity camera></a-entity>
                </a-scene>
            </div>
        </div>
    );
}

export default ARHunt;

