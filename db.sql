CREATE TABLE matches (
    match_id VARCHAR(256) PRIMARY KEY,
    kickoff TIMESTAMP,
    home_team VARCHAR(64),
    away_team VARCHAR(64),
    prediction VARCHAR(16),
    odd DOUBLE PRECISION
);

CREATE INDEX idx_home_away_kickoff
ON matches (home_team, away_team, kickoff);
