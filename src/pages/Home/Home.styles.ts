import styled from 'styled-components'

export const RankingSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 4rem;
  min-height: 100vh;
  width: 100%;
  padding: 4rem;
`

export const SubRankingSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 4rem;
`
