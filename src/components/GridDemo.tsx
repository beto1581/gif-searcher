import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import {
    Carousel,
    Gif,
    Grid,
    Video,
    VideoOverlay
} from "@giphy/react-components";
import React, { useState } from "react";
import { useAsync } from "react-async-hook";
import { createRoot } from "react-dom/client";
import ResizeObserver from "react-resize-observer";
import giphyFetch from "@services/index";

function GridDemo({ onGifClick }) {
    const fetchGifs = (offset: number) =>
        giphyFetch.trending({ offset, limit: 10 });
    const [width, setWidth] = useState(window.innerWidth);
    return (
        <>
            <Grid
                onGifClick={onGifClick}
                fetchGifs={fetchGifs}
                width={width}
                columns={3}
                gutter={6}
            />
            <ResizeObserver
                onResize={({ width }) => {
                    setWidth(width);
                }}
            />
        </>
    );
}