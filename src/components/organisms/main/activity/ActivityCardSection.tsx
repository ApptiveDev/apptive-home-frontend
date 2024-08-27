import ActivityCard from '@components/organisms/main/activity/ActivityCard';
import Grid from '@components/atoms/grid/Grid';
import useActivityCardImage from '@/hooks/activity/useActivityCardImage';

function ActivityCardSection() {
  const getActivityCards = () => {
    const { images } = useActivityCardImage();

    return images.map((path, index) => {
      return (
        <ActivityCard
          title={'title'}
          order={index + 1}
          icon={path}
          paragraph={'paragraph'}
          key={path}
        />
      );
    });
  };

  return (
    <Grid columns={1} responsiveColumns={{ sm: 2 }} style={{
      width: '100%',
    }}
      gap="32px"
    >
      {getActivityCards()}
    </Grid>
  );
}

export default ActivityCardSection;
