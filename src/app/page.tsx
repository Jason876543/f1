"use client"
import { Provider } from 'react-redux';
import store from '@/redux/store';
import F1 from './features/f1';
import { SkeletonTheme } from 'react-loading-skeleton';

export default function Home() {

  return (
    <Provider store={store}>
      <SkeletonTheme baseColor="#e0dada" highlightColor="#ccc7c7">
        <F1/>
      </SkeletonTheme>
    </Provider>
  )
}
