import statusLive from '../src/index';

test.each(
  [
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'мечник', health: 10 }, 'critical'],
    [{ name: 'лучник', health: 50 }, 'wounded'],
  ],
)(
  ('set status living for %s with %s indicate'),
  (input, expected) => {
    const result = statusLive(input);
    expect(result).toBe(expected);
  },
);
