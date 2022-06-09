
import {View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { GLView } from 'expo-gl';

import {useWindowDimensions} from "react-native";
import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, TextureLoader} from "three";
import {Renderer} from "expo-three";

export default function PlaygroundScreen({navigation: {navigate}}) {

    const {width, height} = useWindowDimensions();
    const [rafID, setRafID] = useState(0);

    useEffect(() => {

        return () => {
            if (rafID !== undefined) {
                cancelAnimationFrame(rafID);
            }
        }
    }, [])

    return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <GLView
                    style={{ flex: 1, width: width, height: height }}
                    onContextCreate={(gl) => {
                        const scene = new Scene();
                        const camera = new PerspectiveCamera(
                            45,
                            gl.drawingBufferWidth / gl.drawingBufferHeight,
                            0.1,
                            1000
                        );

                        const renderer = new Renderer({ gl });
                        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
                        renderer.setClearColor(0xffffff, 0);

                        const geometry = new BoxGeometry(1, 1, 1);
                        const material = new MeshBasicMaterial({
                            map: new TextureLoader().load(require('../assets/images/swmansion.png')),
                        });
                        const cube = new Mesh(geometry, material);
                        scene.add(cube);

                        camera.position.z = 3;

                        const animate = () => {
                            setRafID(requestAnimationFrame(animate));

                            camera.position.z += 0.05;
                            cube.rotation.x += 0.02;
                            cube.rotation.y += 0.03;
                            cube.position.x = Math.sin(cube.rotation.x);
                            cube.position.y = Math.cos(cube.rotation.y);

                            renderer.render(scene, camera);

                            gl.endFrameEXP();
                        };
                        animate();
                    }}
                />
            </View>
    );
}
