import PropTypes from 'prop-types';
import {PaintingStatistics} from './Statistics';
import {StatList,StatsItem} from './Statistics.styled'

export function PaintingStatisticsList({stats, title}){
     
    return (
        <section className="statistics">

          {title?<h2 className="title" >{title}</h2>:null}

  <StatList >
      {stats.map(description => (
        <StatsItem key={description.id}>
          
          <PaintingStatistics 
          label={description.label}
          percentage={description.percentage}/>
          
        </StatsItem>
      ))}
    </StatList>
  
</section>
    )
};


PaintingStatisticsList.propTypes = {
  
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};


