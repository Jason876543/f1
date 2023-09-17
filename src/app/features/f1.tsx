import DriversTable from '@/components/table/drivers/driversTable';
import TeamsTable from '@/components/table/teams/teamsTable';
import Header from '@/components/header/header';
import React, { useState } from 'react';
import { useGetSeasonsQuery } from '@/redux/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import * as Switch from '@radix-ui/react-switch';
import styles from './f1.module.scss';
import Seasons from '@/components/seasons/seasons';

const F1 = () => {
  //get seasons
  const {
    data: seasonData,
    isLoading: seasonIsLoading,
    isError: seasonError,
  } = useGetSeasonsQuery();
      
    if (seasonError) {
      return <div>Error fetching seasons</div>;
    }

    const [selectedSeason, setSeason] = useState(2019);

    // get driver or teams depending on switch state, for the season selected.
    const [isDriversQuery, setIsDriversQuery] = useState(true);
          
    const toggleQuery = () => {
      setIsDriversQuery((prev) => !prev);
    };

  return <div>
      <Header/>
        <div className={styles.content}>
          {seasonIsLoading ? <div><Skeleton/></div> : 
            <section>
              <h2>Seasons</h2>
                {seasonData ? <Seasons seasons={seasonData} selectedSeason={selectedSeason} onClick={(season: number) => setSeason(season)}/>: null }
            </section>
          }
          
          <section>
            <div className={styles.titleBar}>
              <h2>Rankings</h2>                     

              { seasonIsLoading? null :
              <>
                <label htmlFor='rankingsSwitch' className={styles.rankingsLabel}>Teams</label>
                <Switch.Root className={styles.SwitchRoot} onCheckedChange={toggleQuery} id="rankingsSwitch">
                  <Switch.Thumb className={styles.SwitchThumb}/>
                </Switch.Root>
              </>
              }
            </div>

            { 
                seasonIsLoading ? 
                    <div><Skeleton/></div> :
                    isDriversQuery ? <DriversTable season={selectedSeason}/> : <TeamsTable season={selectedSeason}/> 
            }
          </section>
        </div>
    </div>
};

export default F1;