import { fetchMovieData } from '@/actions/fetchMovieData';
import { fetchReviews } from '@/actions/fetchReviews';
import { Review } from '@/types/reviews';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface ReviewsState {
    status: 'idle' | 'loading' | 'failed';
    reviews: Array<Review> | null;
}

const initialState : ReviewsState = {
    status: 'idle',
    reviews: null,
};

export const getReviews = createAsyncThunk(
    'reviews/getReviews',
    async () => {
        const response = await fetchReviews();
        const reviews = response;
        // @ts-ignore
        return Promise.all(reviews.map(async (reviewServer) => {
            const movie = await fetchMovieData(reviewServer.movie_id);
            const review : Review = {
                ...reviewServer,
                movie,
            };
            return review;
        }));
    }
);

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getReviews.fulfilled, (state, action: PayloadAction<Array<Review>>) => {
            state.reviews = action.payload;
            state.status = 'idle';
        });
        builder.addCase(getReviews.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getReviews.rejected, (state) => {
            state.status = 'failed';
        });
    },
});

// export const {  } = reviewsSlice.actions;

export default reviewsSlice.reducer;