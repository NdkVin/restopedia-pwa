const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return movie that has been liked', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    expect(await favoriteResto.getResto(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getResto(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getResto(3))
      .toEqual({ id: 3 });
    expect(await favoriteResto.getResto(4))
      .toEqual(undefined);
  });

  it('should refuse a movie from being added if it does not have the correct property', async () => {
    favoriteResto.putResto({ blank: 'blank' });

    expect(await favoriteResto.getAllResto())
      .toEqual([]);
  });

  it('should can return all of the movies that have been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should can remove movies that have been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    favoriteResto.deleteResto(1);

    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a movie even though the movie has not been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    favoriteResto.deleteResto(4);

    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestoModel };
