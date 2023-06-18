import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-admin';

const Home = () => (
  <Box sx={{ padding: '2rem' }}>
    <Grid container rowSpacing={2} columnSpacing={2}>
      <Grid item>
        <Card>
          <CardHeader title="Welcome to library administration" />
          <CardContent>
            admin-library-app is a powerful and user-friendly library
            administration application designed to streamline and optimize the
            management of libraries of all sizes. With its comprehensive
            features and intuitive interface, admin-library-app empowers
            librarians and administrators to efficiently handle various tasks,
            enhance patron experiences, and ensure smooth library operations.
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card>
          <CardMedia
            sx={{ height: 140 }}
            image="/images/author-bg.jpg"
            title="Authors"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Authors
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Authors often possess a unique perspective, creative imagination,
              and the ability to effectively communicate their thoughts and
              ideas through the written word. They may specialize in various
              genres or subject matters, including fiction, non-fiction, science
              fiction, mystery, romance, historical, self-help, and many others.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/authors">Go</Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card>
          <CardMedia
            sx={{ height: 140 }}
            image="/images/books-bg.jpg"
            title="Books"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Books
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Traditionally, books are made of paper or parchment pages bound
              together between covers. However, with the advancement of
              technology, digital books or e-books have gained popularity. These
              electronic versions can be read on e-readers, tablets,
              smartphones, or computers, offering convenience and portability.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/books">Go</Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default Home;
