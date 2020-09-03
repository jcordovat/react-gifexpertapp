import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      {loading && (
        <p className="animate__animated animate__bounce animate__flash">
          Cargando...
        </p>
      )}
      <h3>{category}</h3>
      <div className="card-grid animate__animated animate__bounce animate__rubberBand">
        {data.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
