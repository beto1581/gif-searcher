import { GiphyFetch } from "@giphy/js-fetch-api";
import {
    Carousel,
    Gif,
    Grid,
    Video,
    VideoOverlay
} from "@giphy/react-components";
import React, { useState } from "react";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

export default function GridDemo({ onGifClick }) {
    const [gif, setGif] = useState(null);
    async function getGif() {
        const { data } = await giphyFetch.gif("fpXxIjftmkk9y");
        setGif(data);
    }
    getGif();

    return gif && <Gif gif={gif} width={400} />


}