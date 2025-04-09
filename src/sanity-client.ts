import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "jazhb8b7",
  dataset: "production",
  // Don't think it's needed, as we are statically generating the site
  // useCdn: true, // set to `false` to bypass the edge cache

  apiVersion: "2025-02-28",

  // This token has viewer role, therefore it is stored here publicly
  // The dataset is public anyway, so it's not a security risk
  //
  // Furthermore, this token is not used in the frontend, only in the backend
  token:
    "skB7j8Wjfr8W8XZ00BMmYSnvKXwA3bMoK63EkbIweMqBJNWd1P0YRCboemPnm6ShkxliBzvySISqbCyXiYt4PFw9HnbZLVHZjRv1NvptX9Zm9ivUtcMMByN2JiPewoQrHDGmkizJ0tEycJX4iGzx7GufGR152fVARNPMzv4VPxl1jhk1WJux",
});
