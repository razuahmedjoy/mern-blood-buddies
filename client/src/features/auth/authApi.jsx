import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register : builder.mutation({
            query: (body) => ({
                url: "/user/signup",
                method: "POST",
                body,
            }),
        }),
        login : builder.mutation({
            query: (body) => ({
                url: "/user/login",
                method: "POST",
                body,
                
            }),
        }),
    }),
})

export const {
    useRegisterMutation,
    useLoginMutation,

} = authApi