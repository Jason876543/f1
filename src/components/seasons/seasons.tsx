import React from 'react';
import styles from './seasons.module.scss';

interface SeasonsProps {
  seasons: number[];
  onClick: (season: number) => void;
  selectedSeason: number;
}

const Seasons = ({ seasons, selectedSeason, onClick }: SeasonsProps) => {
  return (
    <ul className={styles.seasons}>
      {seasons.map((season) => (
        <li key={season}>
          <button onClick={() => onClick(season)} className={ selectedSeason === season ? styles.selected: ''}>{season}</button>
        </li>
      ))}
    </ul>
  );
};

export default Seasons;