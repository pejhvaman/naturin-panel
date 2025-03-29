import supabase, { supabaseUrl } from "./supabase";

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return { data };
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return { data };
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  console.log(data);

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ fullName, password, avatar }) {
  //1. update fullname or password
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  if (!avatar) return data;
  //2. update avatar file into storage
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageErr } = await supabase.storage
    .from("avatars")
    .update(fileName, avatar);
  if (storageErr) throw new Error(storageErr.message);

  //3. update avavtar url for the current user
  const { data: updatedUser, error: updatingErr } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars//${fileName}`,
      },
    });
  //https://gugxdslltzahypbcdali.supabase.co/storage/v1/object/public/avatars//0ae4b0dd41f3459733647d1bdaa92f55.jpg

  if (updatingErr) throw new Error(updatingErr.message);
  return updatedUser;
}
