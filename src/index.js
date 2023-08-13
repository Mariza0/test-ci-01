export default function statusLive(input) {
  const iff = (condition, then, otherwise) => (condition ? then : otherwise);
  return iff(input.health > 50, 'healthy', iff(input.health > 15 && input.health <= 50, 'wounded', 'critical'));
}
