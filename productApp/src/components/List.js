import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";
function List({ list }) {
    return (
        <div className="d-flex flex-wrap justify-content-space-around" >
            {list.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 245 }} key={index} className="m-4">
                        <CardActionArea>
                            <LazyLoadImage
                                alt={`IMAGE NOT FOUND OR NOT LOADED`}
                                height={195}
                                src={item.images[0]}
                                placeholderSrc="black-and-white"
                                effect="blur"
                                opacity={1.2}
                                // width={245}
                            />
                            {/* <CardMedia
                                component="img"
                                height="195"
                                image={item.images[0]}
                                alt="green iguana"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* {item.name.common} */}
                                </Typography>
                                <Typography variant="body2" className='mt-2' color="text.secondary">
                                    <span className='p-1 '>price</span>  {item.price}
                                </Typography>

                                <Typography variant="body2" className='mt-2' color="text.secondary">
                                    <span className='p-1'>Description</span>     {item.description}
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                        <CardActions>
                            <Link size="small"  to={`/products/${item.id}`} color="primary">
                                more
                            </Link>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

export default List;