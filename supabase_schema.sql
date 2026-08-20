-- Generated Supabase Schema

-- ==========================================
-- ENUMS
-- ==========================================

CREATE TYPE membership_status AS ENUM ('active', 'inactive', 'lapsed', 'suspended', 'cancelled');
CREATE TYPE membership_tier AS ENUM ('free', 'regular', 'premium', 'vip');
CREATE TYPE approval_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE handedness AS ENUM ('left', 'right', 'ambidextrous');
CREATE TYPE player_position AS ENUM ('forward', 'defense', 'goalie');
CREATE TYPE equipment_type AS ENUM ('stick', 'helmet', 'gloves', 'pads', 'skates', 'jersey', 'pants', 'shoulder_pads', 'shin_guards', 'other');
CREATE TYPE equipment_condition AS ENUM ('excellent', 'good', 'fair', 'poor');
CREATE TYPE division_level AS ENUM ('house_league', 'rep', 'select', 'elite');
CREATE TYPE skill_level AS ENUM ('beginner', 'intermediate', 'advanced', 'elite');
CREATE TYPE sponsorship_level AS ENUM ('platinum', 'gold', 'silver', 'bronze');
CREATE TYPE game_type AS ENUM ('regular', 'playoff', 'preseason', 'exhibition');
CREATE TYPE penalty_type AS ENUM ('hooking', 'tripping', 'slashing', 'high_sticking', 'elbowing', 'charging', 'cross_checking', 'holding', 'interference', 'roughing', 'unsportsmanlike_conduct', 'delay_of_game', 'boarding', 'illegal_check_to_head', 'spearing', 'other');
CREATE TYPE transfer_type AS ENUM ('trade', 'waiver', 'promotion', 'demotion');
CREATE TYPE milestone_type AS ENUM ('goals', 'assists', 'games_played', 'shutouts', 'hat_trick', 'points');
CREATE TYPE loan_reason AS ENUM ('development', 'injury_replacement', 'depth', 'skill_building', 'other');
CREATE TYPE season_status AS ENUM ('planning', 'active', 'completed', 'cancelled');
CREATE TYPE team_status AS ENUM ('active', 'inactive', 'disbanded', 'archived');
CREATE TYPE staff_role AS ENUM ('head_coach', 'assistant_coach', 'goalie_coach', 'trainer', 'equipment_manager', 'general_manager', 'other');
CREATE TYPE official_role AS ENUM ('referee', 'linesman', 'other', 'goal_judge', 'timekeeper', 'penalty_timekeeper', 'game_official');
CREATE TYPE player_status AS ENUM ('active', 'injured', 'suspended', 'inactive', 'traded', 'released', 'retired', 'on_leave');
CREATE TYPE game_status AS ENUM ('scheduled', 'in_progress', 'completed', 'cancelled', 'postponed');
CREATE TYPE event_type AS ENUM ('goal', 'assist', 'penalty', 'shot', 'save', 'hit', 'block', 'takeaway', 'giveaway', 'faceoff', 'period_start', 'period_end', 'game_start', 'game_end', 'goal_against', 'check', 'crosscheck', 'hooking', 'holding', 'interference', 'tripping', 'slashing', 'high_stick', 'roughing', 'fighting', 'boarding', 'charging', 'elbowing', 'kneeing', 'spearing');
CREATE TYPE rarity_tier AS ENUM ('common', 'rare', 'legendary');
CREATE TYPE waiver_status AS ENUM ('pending', 'approved', 'rejected', 'withdrawn', 'processed');
CREATE TYPE transfer_status AS ENUM ('pending', 'approved', 'rejected', 'completed', 'cancelled');
CREATE TYPE suspension_reason AS ENUM ('misconduct', 'unsportsmanlike_conduct', 'fighting', 'abuse_of_officials', 'injury_to_opponent', 'excessive_penalties', 'violation_of_league_rules', 'other');
CREATE TYPE suspension_status AS ENUM ('active', 'served', 'appealed', 'overturned');
CREATE TYPE event_status AS ENUM ('scheduled', 'in_progress', 'completed', 'cancelled');
CREATE TYPE rsvp_status AS ENUM ('attending', 'not_attending', 'maybe', 'no_response');
CREATE TYPE group_type AS ENUM ('league', 'division', 'team', 'event', 'brand', 'venue', 'retail_partner', 'sponsor', 'staff_pool', 'custom');
CREATE TYPE group_member_type AS ENUM ('organization', 'season', 'division', 'team', 'player', 'person', 'user_account', 'event', 'venue', 'brand', 'retailer', 'sponsor', 'game', 'practice_session', 'custom');
CREATE TYPE appeal_status AS ENUM ('filed', 'under_review', 'decision_pending', 'upheld', 'overturned', 'withdrawn');
CREATE TYPE incident_type AS ENUM ('fighting', 'abuse_of_officials', 'abuse_of_player', 'dangerous_play', 'unsportsmanlike_conduct', 'equipment_violation', 'other');
CREATE TYPE incident_status AS ENUM ('reported', 'under_investigation', 'resolved', 'pending_hearing', 'closed');
CREATE TYPE ticket_type AS ENUM ('single_game', 'season_pass', 'multi_game_pack', 'vip_seating', 'family_bundle');
CREATE TYPE ticket_status AS ENUM ('available', 'sold', 'reserved', 'refunded', 'cancelled');
CREATE TYPE merchandise_type AS ENUM ('jersey', 'hoodie', 'hat', 'scarf', 'water_bottle', 'equipment', 'other');
CREATE TYPE merchandise_status AS ENUM ('in_stock', 'low_stock', 'out_of_stock', 'discontinued');
CREATE TYPE order_status AS ENUM ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled', 'refunded');
CREATE TYPE announcement_type AS ENUM ('news', 'alert', 'rule_change', 'schedule_update', 'maintenance', 'community');
CREATE TYPE announcement_audience AS ENUM ('league_wide', 'division', 'team', 'coaching_staff', 'players_only', 'members_only', 'spectators');
CREATE TYPE tournament_format AS ENUM ('round_robin', 'single_elimination', 'double_elimination', 'group_stage', 'swiss');
CREATE TYPE tournament_status AS ENUM ('registration_open', 'in_progress', 'completed', 'cancelled');
CREATE TYPE player_movement_type AS ENUM ('drafted', 'signed', 'traded', 'released', 'loaned', 'recalled', 'transferred', 'waived');
CREATE TYPE table_category AS ENUM ('core', 'league_structure', 'people_and_rosters', 'games_and_events', 'statistics', 'admin_and_discipline', 'playoffs', 'community', 'settings_and_integrations', 'operations', 'helpers_and_cache');
CREATE TYPE primary_user_role AS ENUM ('admin', 'scorekeeper', 'coach', 'player', 'referee');
CREATE TYPE update_frequency AS ENUM ('once_per_season', 'weekly', 'per_game', 'ad_hoc', 'real_time', 'computed_on_save');
CREATE TYPE user_role AS ENUM ('admin', 'league_manager', 'team_manager', 'scorekeeper', 'player', 'coach', 'spectator', 'retailer', 'sponsor');
CREATE TYPE user_status AS ENUM ('active', 'inactive', 'suspended', 'banned');
CREATE TYPE permission_type AS ENUM ('create_league', 'manage_league', 'manage_team', 'manage_players', 'manage_games', 'manage_stats', 'manage_schedule', 'manage_roles', 'view_standings', 'view_stats', 'edit_profile', 'delete_content');
CREATE TYPE player_free_agent_status AS ENUM ('free_agent', 'signed', 'restricted', 'unrestricted');
CREATE TYPE position AS ENUM ('goaltender', 'defenseman', 'forward', 'center', 'left_wing', 'right_wing', 'utility');
CREATE TYPE organization_type AS ENUM ('league', 'club', 'association', 'federation');
CREATE TYPE season_phase AS ENUM ('preseason', 'regular_season', 'playoff', 'finals', 'offseason');
CREATE TYPE game_period AS ENUM ('first', 'second', 'third', 'overtime', 'shootout');
CREATE TYPE division_tier AS ENUM ('elite', 'premium', 'intermediate', 'recreational', 'developmental');
CREATE TYPE event_rsvp_status AS ENUM ('attending', 'not_attending', 'maybe', 'no_response');
CREATE TYPE draft_status AS ENUM ('open', 'in_progress', 'completed', 'archived');
CREATE TYPE draft_pick_status AS ENUM ('available', 'selected', 'traded', 'released');
CREATE TYPE bracket_type AS ENUM ('single_elimination', 'double_elimination', 'round_robin', 'swiss');
CREATE TYPE bracket_status AS ENUM ('scheduled', 'in_progress', 'completed', 'cancelled');
CREATE TYPE shopify_sync_status AS ENUM ('pending', 'synced', 'failed', 'manual');
CREATE TYPE scorekeeper_setting_type AS ENUM ('period_duration', 'intermission_duration', 'overtime_duration', 'shootout_format', 'icing_rule', 'offside_rule');
CREATE TYPE discipline_type AS ENUM ('suspension', 'fine', 'warning', 'ejection', 'game_misconduct');
CREATE TYPE invoice_status AS ENUM ('draft', 'sent', 'paid', 'overdue', 'cancelled', 'refunded');
CREATE TYPE payment_method AS ENUM ('credit_card', 'bank_transfer', 'check', 'paypal', 'cash');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
CREATE TYPE audit_action AS ENUM ('create', 'update', 'delete', 'view', 'export', 'login', 'logout', 'permission_change');
CREATE TYPE notification_type AS ENUM ('game_scheduled', 'game_reminder', 'game_result', 'team_invite', 'roster_update', 'event_reminder', 'payment_due', 'system_alert', 'message');
CREATE TYPE practice_session_type AS ENUM ('skill_development', 'scrimmage', 'conditioning', 'tactics_review', 'game_preparation', 'recovery');
CREATE TYPE official_certification_level AS ENUM ('rookie', 'junior', 'intermediate', 'senior', 'elite', 'international');
CREATE TYPE official_assignment_status AS ENUM ('assigned', 'accepted', 'declined', 'completed', 'cancelled');
CREATE TYPE message_type AS ENUM ('direct_message', 'team_message', 'announcement', 'system_notification');
CREATE TYPE message_priority AS ENUM ('low', 'normal', 'high', 'urgent');

-- ==========================================
-- TABLES
-- ==========================================

CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    date_of_birth date,
    email VARCHAR UNIQUE,
    phone VARCHAR,
    handedness handedness,
    profile_photo_url VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    user_id INTEGER,
    gender VARCHAR,
    nationality VARCHAR,
    emergency_contact_name VARCHAR,
    emergency_contact_phone VARCHAR
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    name VARCHAR NOT NULL UNIQUE,
    description text,
    permissions text,
    is_custom boolean DEFAULT false,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    is_system_role boolean DEFAULT false
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    person_id INTEGER NOT NULL,
    username VARCHAR NOT NULL UNIQUE,
    email VARCHAR NOT NULL UNIQUE,
    password_hash VARCHAR NOT NULL,
    role_id INTEGER NOT NULL,
    preferred_organization_id INTEGER,
    shopify_username VARCHAR,
    is_active boolean DEFAULT true,
    last_login timestamp,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    first_name VARCHAR,
    last_name VARCHAR,
    profile_photo_url VARCHAR,
    phone_number VARCHAR,
    date_of_birth date,
    user_role user_role NOT NULL DEFAULT 'player',
    user_status user_status DEFAULT 'active',
    last_login_at timestamp
);

CREATE TABLE membership_tiers (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    tier_level membership_tier NOT NULL,
    name VARCHAR NOT NULL,
    description text,
    annual_fee DECIMAL(10,2),
    features text,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    benefits text,
    perks_discount_percentage DECIMAL(5,2),
    priority_ticket_access boolean DEFAULT false,
    merchandise_discount DECIMAL(5,2),
    event_access VARCHAR,
    loyalty_points_multiplier DECIMAL(3,2) DEFAULT 1
);

CREATE TABLE membership_benefits (
    id SERIAL PRIMARY KEY,
    tier_id INTEGER NOT NULL,
    benefit_name VARCHAR NOT NULL,
    benefit_description text,
    benefit_value VARCHAR,
    created_at timestamp DEFAULT now()
);

CREATE TABLE memberships (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL,
    tier_id INTEGER NOT NULL,
    status membership_status DEFAULT 'active',
    join_date date NOT NULL,
    end_date date,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE membership_fees (
    id SERIAL PRIMARY KEY,
    membership_id INTEGER NOT NULL,
    fee_amount DECIMAL(10,2) NOT NULL,
    fee_type VARCHAR NOT NULL,
    fee_period_start date,
    fee_period_end date,
    payment_date date,
    paid_by INTEGER,
    payment_method VARCHAR,
    transaction_id VARCHAR,
    notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE membership_history (
    id SERIAL PRIMARY KEY,
    person_id INTEGER NOT NULL,
    organization_id INTEGER NOT NULL,
    tier_id INTEGER,
    status membership_status NOT NULL,
    start_date date NOT NULL,
    end_date date,
    reason_ended VARCHAR,
    created_at timestamp DEFAULT now()
);

CREATE TABLE member_status_log (
    id SERIAL PRIMARY KEY,
    membership_id INTEGER NOT NULL,
    old_status membership_status,
    new_status membership_status NOT NULL,
    changed_by INTEGER,
    reason_for_change VARCHAR,
    changed_at timestamp DEFAULT now()
);

CREATE TABLE user_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE,
    bio text,
    profile_picture_url VARCHAR,
    phone_number VARCHAR,
    preferred_language VARCHAR DEFAULT 'en',
    timezone VARCHAR DEFAULT 'UTC',
    notifications_enabled boolean DEFAULT true,
    created_at timestamp DEFAULT now()
);

CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    parent_organization_id INTEGER,
    name VARCHAR NOT NULL,
    league_name VARCHAR,
    location VARCHAR,
    country VARCHAR,
    province_state VARCHAR,
    logo_url VARCHAR,
    website VARCHAR,
    contact_email VARCHAR,
    contact_phone VARCHAR,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    created_by_user_id INTEGER,
    organization_type organization_type NOT NULL,
    description text,
    banner_url VARCHAR,
    address VARCHAR,
    city VARCHAR,
    postal_code VARCHAR,
    financial_year_start_month INTEGER,
    federation_level VARCHAR,
    tax_id VARCHAR,
    federation_affiliate_number VARCHAR,
    ijshockey_org_id VARCHAR,
    compliance_certifications text
);

CREATE TABLE brands (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE,
    logo_url VARCHAR,
    website VARCHAR,
    created_at timestamp DEFAULT now()
);

CREATE TABLE retailers (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    logo_url VARCHAR,
    website VARCHAR,
    contact_email VARCHAR,
    contact_phone VARCHAR,
    address VARCHAR,
    city VARCHAR,
    province_state VARCHAR,
    country VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    retailer_code VARCHAR UNIQUE,
    description text,
    postal_code VARCHAR,
    is_archived boolean DEFAULT false
);

CREATE TABLE sponsors (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    brand_id INTEGER,
    name VARCHAR NOT NULL,
    logo_url VARCHAR,
    website VARCHAR,
    sponsorship_level sponsorship_level,
    start_date date,
    end_date date,
    created_at timestamp DEFAULT now(),
    description text,
    contact_email VARCHAR,
    contact_phone VARCHAR,
    annual_amount DECIMAL(15,2),
    updated_at timestamp DEFAULT now(),
    is_archived boolean DEFAULT false
);

CREATE TABLE leagues (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    description text,
    logo_url VARCHAR,
    banner_url VARCHAR,
    country VARCHAR,
    tier_level VARCHAR,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE seasons (
    id SERIAL PRIMARY KEY,
    league_id INTEGER NOT NULL,
    organization_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    year INTEGER NOT NULL UNIQUE,
    status season_status DEFAULT 'planning',
    start_date date,
    end_date date,
    registration_deadline date,
    playoff_start_date date,
    league_rules_version VARCHAR,
    logo_url VARCHAR,
    color_scheme VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    registration_start_date date,
    registration_fee DECIMAL(10,2),
    team_fee DECIMAL(10,2),
    player_fee DECIMAL(10,2)
);

CREATE TABLE divisions (
    id SERIAL PRIMARY KEY,
    league_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    level division_level,
    age_group VARCHAR,
    skill_level skill_level,
    max_teams INTEGER,
    playoff_format VARCHAR,
    playoff_teams_qualify INTEGER,
    tiebreaker_rules text,
    logo_url VARCHAR,
    banner_url VARCHAR,
    created_at timestamp DEFAULT now(),
    conference_id INTEGER,
    organization_id INTEGER,
    registration_id VARCHAR UNIQUE,
    ijshockey_division_id VARCHAR,
    division_tier division_tier NOT NULL,
    description text,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    division_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    abbreviation VARCHAR,
    logo_url VARCHAR,
    home_color VARCHAR,
    away_color VARCHAR,
    practice_venue_id INTEGER,
    practice_schedule text,
    status team_status DEFAULT 'active',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    club_id INTEGER,
    conference_id INTEGER,
    registration_id VARCHAR UNIQUE,
    ijshockey_team_id VARCHAR,
    budget_amount DECIMAL(15,2),
    manager_name VARCHAR,
    manager_contact VARCHAR,
    assistant_coach VARCHAR,
    goalie_coach VARCHAR,
    franchise_start_year INTEGER,
    website VARCHAR,
    social_media_handles text,
    insurance_provider VARCHAR,
    insurance_policy_number VARCHAR,
    goalsong VARCHAR,
    is_archived boolean DEFAULT false
);

CREATE TABLE team_profiles (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL UNIQUE,
    description text,
    win_count INTEGER DEFAULT 0,
    loss_count INTEGER DEFAULT 0,
    tie_count INTEGER DEFAULT 0,
    goals_for INTEGER DEFAULT 0,
    goals_against INTEGER DEFAULT 0,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE farm_teams (
    id SERIAL PRIMARY KEY,
    parent_team_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    abbreviation VARCHAR,
    logo_url VARCHAR,
    created_at timestamp DEFAULT now()
);

CREATE TABLE team_staff (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL,
    staff_role staff_role NOT NULL,
    hire_date date NOT NULL,
    end_date date,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE game_officials (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL,
    official_role official_role NOT NULL,
    created_at timestamp DEFAULT now()
);

CREATE TABLE game_captains (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    is_captain boolean DEFAULT true,
    is_alternate_captain boolean DEFAULT false,
    created_at timestamp DEFAULT now()
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    person_id INTEGER NOT NULL,
    jersey_number INTEGER,
    position player_position,
    height_cm INTEGER,
    weight_kg INTEGER,
    handedness handedness,
    draft_year INTEGER,
    is_eligible_for_draft boolean DEFAULT true,
    uniform_number_preferred INTEGER,
    can_play_multiple_positions boolean DEFAULT false,
    status player_status DEFAULT 'active',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    user_id INTEGER,
    registration_id VARCHAR UNIQUE,
    ijshockey_player_id VARCHAR,
    free_agent_status player_free_agent_status DEFAULT 'free_agent',
    free_agent_since_date date,
    preferred_name VARCHAR,
    secondary_position position,
    preferred_jersey_number INTEGER,
    shoots VARCHAR,
    equipment_size_preferences text,
    shirt_size VARCHAR,
    international_team VARCHAR,
    agent_name VARCHAR,
    agent_contact VARCHAR,
    goalsong VARCHAR
);

CREATE TABLE player_profiles (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL UNIQUE,
    bio text,
    photo_url VARCHAR,
    skill_level skill_level,
    years_experience INTEGER,
    preferred_positions VARCHAR,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE rosters (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    jersey_number INTEGER,
    is_captain boolean DEFAULT false,
    is_alternate_captain boolean DEFAULT false,
    join_date date,
    contract_end_date date,
    salary_cap_hit DECIMAL(10,2),
    status player_status DEFAULT 'active',
    photo_url VARCHAR,
    created_at timestamp DEFAULT now(),
    name VARCHAR,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE lineups (
    id SERIAL PRIMARY KEY,
    game_id INTEGER,
    team_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    position player_position,
    line_number INTEGER,
    is_starting boolean DEFAULT false,
    created_at timestamp DEFAULT now(),
    roster_id INTEGER,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE loan_players (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    from_team_id INTEGER NOT NULL,
    to_team_id INTEGER NOT NULL,
    start_date date NOT NULL,
    end_date date,
    reason loan_reason,
    status VARCHAR DEFAULT 'active',
    created_at timestamp DEFAULT now()
);

CREATE TABLE personal_equipment (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    equipment_type equipment_type NOT NULL,
    brand_id INTEGER,
    model VARCHAR,
    serial_number VARCHAR,
    condition equipment_condition,
    is_in_use boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE venues (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    city VARCHAR,
    province_state VARCHAR,
    address VARCHAR,
    capacity INTEGER,
    ice_surface_size VARCHAR,
    has_locker_rooms boolean,
    parking_available boolean,
    wheelchair_accessible boolean,
    amenities text,
    logo_url VARCHAR,
    banner_url VARCHAR,
    created_at timestamp DEFAULT now(),
    venue_code VARCHAR UNIQUE,
    postal_code VARCHAR,
    country VARCHAR,
    latitude DECIMAL(10,7),
    longitude DECIMAL(10,7),
    contact_phone VARCHAR,
    website VARCHAR,
    wifi_available boolean,
    locker_rooms_count INTEGER,
    dressing_room_count INTEGER,
    accessibility_info text,
    max_concurrent_games INTEGER,
    ice_quality_rating DECIMAL(3,2),
    sound_system_available boolean,
    scoreboard_type VARCHAR,
    updated_at timestamp DEFAULT now(),
    is_archived boolean DEFAULT false
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    season_id INTEGER NOT NULL,
    division_id INTEGER NOT NULL,
    home_team_id INTEGER NOT NULL,
    away_team_id INTEGER NOT NULL,
    venue_id INTEGER,
    scheduled_time timestamp NOT NULL,
    status game_status DEFAULT 'scheduled',
    home_goals INTEGER DEFAULT 0,
    away_goals INTEGER DEFAULT 0,
    game_type game_type,
    overtime_period boolean DEFAULT false,
    is_shootout boolean DEFAULT false,
    shootout_home_goals INTEGER,
    shootout_away_goals INTEGER,
    game_duration_minutes INTEGER,
    final_score_locked boolean DEFAULT false,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    competition_id INTEGER,
    actual_start_time timestamp,
    actual_end_time timestamp,
    attendance_count INTEGER,
    broadcast_url VARCHAR,
    broadcast_status VARCHAR,
    commentary_url VARCHAR,
    replay_url VARCHAR,
    is_ticketed boolean DEFAULT false,
    venue_change_reason text,
    official_match_id VARCHAR,
    referee_report_url VARCHAR,
    incident_report_url VARCHAR,
    weather_conditions text
);

CREATE TABLE game_approvals (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL UNIQUE,
    approved_by INTEGER NOT NULL,
    approval_status approval_status DEFAULT 'pending',
    approval_date timestamp,
    notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE game_events (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    event_type event_type NOT NULL,
    period INTEGER,
    time_in_period VARCHAR,
    team_id INTEGER NOT NULL,
    player_id INTEGER,
    assist_player_id INTEGER,
    second_assist_player_id INTEGER,
    x_coordinate INTEGER,
    y_coordinate INTEGER,
    penalty_type penalty_type,
    penalty_duration INTEGER,
    is_confirmed boolean DEFAULT false,
    video_review_used boolean DEFAULT false,
    corrected_by_admin boolean DEFAULT false,
    auto_scheduled boolean DEFAULT false,
    description text,
    created_at timestamp DEFAULT now(),
    assisting_player_id INTEGER,
    secondary_assist_player_id INTEGER,
    opposing_team_id INTEGER,
    serving_player_id INTEGER,
    period_time_seconds INTEGER,
    event_detail text,
    zone VARCHAR,
    shot_x_coordinate DECIMAL(10,2),
    shot_y_coordinate DECIMAL(10,2),
    empty_net boolean DEFAULT false,
    penalty_minutes INTEGER,
    penalty_served boolean DEFAULT false,
    replay_url VARCHAR,
    review_status VARCHAR,
    shift_number INTEGER,
    coach_challenge_flag boolean DEFAULT false,
    video_review_url VARCHAR,
    challenge_outcome VARCHAR,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE standings (
    id SERIAL PRIMARY KEY,
    division_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    games_played INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    ties INTEGER DEFAULT 0,
    goals_for INTEGER DEFAULT 0,
    goals_against INTEGER DEFAULT 0,
    points INTEGER DEFAULT 0,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_statistics (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    games_played INTEGER DEFAULT 0,
    goals INTEGER DEFAULT 0,
    assists INTEGER DEFAULT 0,
    points INTEGER DEFAULT 0,
    penalty_minutes INTEGER DEFAULT 0,
    shots INTEGER DEFAULT 0,
    plus_minus INTEGER DEFAULT 0,
    updated_at timestamp DEFAULT now(),
    shots_on_goal INTEGER DEFAULT 0,
    shots_against INTEGER DEFAULT 0,
    hits INTEGER DEFAULT 0,
    blocks INTEGER DEFAULT 0,
    giveaways INTEGER DEFAULT 0,
    takeaways INTEGER DEFAULT 0,
    created_at timestamp DEFAULT now()
);

CREATE TABLE team_statistics (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    games_played INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    ties INTEGER DEFAULT 0,
    goals_for INTEGER DEFAULT 0,
    goals_against INTEGER DEFAULT 0,
    power_play_goals INTEGER DEFAULT 0,
    power_play_attempts INTEGER DEFAULT 0,
    short_handed_goals INTEGER DEFAULT 0,
    updated_at timestamp DEFAULT now(),
    overtimes INTEGER DEFAULT 0,
    goal_differential INTEGER DEFAULT 0,
    points INTEGER DEFAULT 0,
    created_at timestamp DEFAULT now()
);

CREATE TABLE achievements (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description text,
    badge_icon_url VARCHAR,
    criteria VARCHAR,
    category VARCHAR,
    rarity_tier rarity_tier,
    display_order INTEGER,
    verified_by INTEGER
);

CREATE TABLE player_achievements (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    achievement_id INTEGER NOT NULL,
    earned_date date NOT NULL,
    season_id INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE milestones (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    milestone_type milestone_type,
    value INTEGER,
    description text,
    achieved_date date,
    season_id INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE waivers (
    id SERIAL PRIMARY KEY,
    season_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    requesting_team_id INTEGER NOT NULL,
    current_team_id INTEGER,
    status waiver_status DEFAULT 'pending',
    request_date date NOT NULL,
    process_date date,
    notes text,
    processed_by INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE suspensions (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    reason suspension_reason NOT NULL,
    suspension_length_games INTEGER NOT NULL,
    start_date date NOT NULL,
    end_date date,
    issued_by INTEGER,
    status suspension_status DEFAULT 'active',
    notes text,
    document_url VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE transfers (
    id SERIAL PRIMARY KEY,
    season_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    from_team_id INTEGER NOT NULL,
    to_team_id INTEGER NOT NULL,
    transfer_type transfer_type,
    status transfer_status DEFAULT 'pending',
    request_date date NOT NULL,
    approval_date date,
    reason text,
    approved_by INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE player_draft (
    id SERIAL PRIMARY KEY,
    season_id INTEGER NOT NULL,
    division_id INTEGER NOT NULL,
    round INTEGER NOT NULL,
    pick_order INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    player_id INTEGER,
    is_skipped boolean DEFAULT false,
    created_at timestamp DEFAULT now()
);

CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    expense_type VARCHAR NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR,
    expense_date date NOT NULL,
    description text,
    recorded_by INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE playoff_brackets (
    id SERIAL PRIMARY KEY,
    season_id INTEGER NOT NULL,
    division_id INTEGER NOT NULL,
    round INTEGER NOT NULL,
    bracket_position INTEGER NOT NULL,
    home_team_id INTEGER NOT NULL,
    away_team_id INTEGER NOT NULL,
    winner_team_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE playoff_seedings (
    id SERIAL PRIMARY KEY,
    season_id INTEGER NOT NULL,
    division_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    seed_rank INTEGER NOT NULL,
    points_at_seeding INTEGER,
    seeding_date date NOT NULL,
    created_at timestamp DEFAULT now()
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    description text,
    event_date date NOT NULL,
    event_time timestamp,
    venue_id INTEGER,
    event_type VARCHAR,
    status event_status DEFAULT 'scheduled',
    max_attendees INTEGER,
    registration_required boolean DEFAULT false,
    registration_deadline date,
    logo_url VARCHAR,
    banner_url VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    team_id INTEGER,
    created_by_user_id INTEGER,
    event_end_time timestamp,
    location VARCHAR
);

CREATE TABLE event_rsvps (
    id SERIAL PRIMARY KEY,
    event_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    status rsvp_status DEFAULT 'no_response',
    response_date timestamp,
    notes VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    rsvp_status event_rsvp_status DEFAULT 'no_response'
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER NOT NULL,
    recipient_id INTEGER NOT NULL,
    subject VARCHAR,
    body text NOT NULL,
    is_read boolean DEFAULT false,
    read_at timestamp,
    created_at timestamp DEFAULT now(),
    sender_user_id INTEGER,
    recipient_user_id INTEGER,
    team_id INTEGER,
    organization_id INTEGER,
    parent_message_id INTEGER,
    message_type message_type NOT NULL,
    message_priority message_priority DEFAULT 'normal',
    attachment_url VARCHAR,
    archive_flag boolean DEFAULT false,
    pinned_flag boolean DEFAULT false,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    document_type VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description text,
    file_url VARCHAR NOT NULL,
    file_size_bytes INTEGER,
    uploaded_by INTEGER,
    season_id INTEGER,
    team_id INTEGER,
    player_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE google_sheets_settings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL UNIQUE,
    sheet_id VARCHAR,
    api_key VARCHAR,
    scope VARCHAR,
    sync_enabled boolean DEFAULT false,
    last_sync_date timestamp,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE google_apps_script_settings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL UNIQUE,
    project_id VARCHAR,
    api_key VARCHAR,
    deployment_id VARCHAR,
    script_url VARCHAR,
    enabled boolean DEFAULT false,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE shopify_settings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL UNIQUE,
    shop_name VARCHAR NOT NULL,
    api_key VARCHAR,
    api_secret VARCHAR,
    access_token VARCHAR,
    webhook_url VARCHAR,
    sync_enabled boolean DEFAULT false,
    last_sync_date timestamp,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE system_settings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL UNIQUE,
    setting_key VARCHAR NOT NULL,
    setting_value text,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE definitions (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    definition_key VARCHAR NOT NULL,
    definition_value text NOT NULL,
    category VARCHAR,
    description text,
    is_editable boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE game_attendance (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL UNIQUE,
    paid_count INTEGER DEFAULT 0,
    free_count INTEGER DEFAULT 0,
    total_attendance INTEGER DEFAULT 0,
    capacity_utilization_percent DECIMAL(5,2),
    recorded_by INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    user_id INTEGER,
    attendance_status boolean DEFAULT false,
    attendance_timestamp timestamp,
    seat_number VARCHAR
);

CREATE TABLE game_periods (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    period_number INTEGER NOT NULL,
    start_time timestamp,
    end_time timestamp,
    duration_minutes INTEGER,
    home_goals_in_period INTEGER DEFAULT 0,
    away_goals_in_period INTEGER DEFAULT 0,
    official_player_id INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE penalty_box_events (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    period INTEGER NOT NULL,
    time_in_period VARCHAR,
    box_entry_time timestamp,
    box_exit_time timestamp,
    duration_minutes INTEGER,
    penalty_event_id INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE team_versus_team_records (
    id SERIAL PRIMARY KEY,
    season_id INTEGER NOT NULL,
    team_a_id INTEGER NOT NULL,
    team_b_id INTEGER NOT NULL,
    games_played INTEGER DEFAULT 0,
    team_a_wins INTEGER DEFAULT 0,
    team_b_wins INTEGER DEFAULT 0,
    ties INTEGER DEFAULT 0,
    team_a_goals_for INTEGER DEFAULT 0,
    team_b_goals_for INTEGER DEFAULT 0,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE goalie_statistics (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    games_played INTEGER DEFAULT 0,
    games_started INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    ties INTEGER DEFAULT 0,
    shutouts INTEGER DEFAULT 0,
    shots_against INTEGER DEFAULT 0,
    goals_against INTEGER DEFAULT 0,
    save_percentage DECIMAL(5,3),
    goals_against_average DECIMAL(5,2),
    updated_at timestamp DEFAULT now(),
    overtimes INTEGER DEFAULT 0,
    minutes_played INTEGER DEFAULT 0,
    saves INTEGER DEFAULT 0,
    penalty_minutes INTEGER DEFAULT 0,
    created_at timestamp DEFAULT now()
);

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    parent_group_id INTEGER,
    name VARCHAR NOT NULL,
    group_type group_type NOT NULL,
    description text,
    icon_url VARCHAR,
    color_code VARCHAR,
    is_active boolean DEFAULT true,
    sort_order INTEGER,
    metadata text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE group_members (
    id SERIAL PRIMARY KEY,
    group_id INTEGER NOT NULL,
    member_type group_member_type NOT NULL,
    member_id INTEGER NOT NULL,
    role VARCHAR,
    sort_order INTEGER,
    added_date date DEFAULT now(),
    created_at timestamp DEFAULT now()
);

CREATE TABLE practice_sessions (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    venue_id INTEGER,
    scheduled_time timestamp NOT NULL,
    end_time timestamp,
    notes text,
    is_cancelled boolean DEFAULT false,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    created_by_user_id INTEGER,
    name VARCHAR,
    session_type practice_session_type NOT NULL,
    scheduled_end_time timestamp,
    actual_start_time timestamp,
    actual_end_time timestamp,
    location VARCHAR,
    focus_areas text,
    drills_summary text,
    attendance_requirement_flag boolean DEFAULT false,
    video_recording_url VARCHAR
);

CREATE TABLE practice_attendance (
    id SERIAL PRIMARY KEY,
    practice_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    attendance_status VARCHAR NOT NULL,
    created_at timestamp DEFAULT now(),
    practice_session_id INTEGER,
    user_id INTEGER,
    attended boolean DEFAULT false,
    attendance_timestamp timestamp,
    notes text
);

CREATE TABLE player_availability (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    day_of_week INTEGER,
    is_available boolean DEFAULT true,
    reason VARCHAR,
    start_date date,
    end_date date,
    created_at timestamp DEFAULT now()
);

CREATE TABLE official_assignments (
    id SERIAL PRIMARY KEY,
    person_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    official_role official_role NOT NULL,
    is_available boolean DEFAULT true,
    preferred_divisions VARCHAR,
    preferred_venues VARCHAR,
    max_games_per_week INTEGER,
    official_player_id INTEGER,
    official_team_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    game_id INTEGER,
    official_id INTEGER,
    assigned_by_user_id INTEGER,
    status official_assignment_status DEFAULT 'assigned',
    assigned_date timestamp NOT NULL,
    assigned_at timestamp,
    declined_reason text,
    travel_distance_km DECIMAL(10,2),
    compensation_amount DECIMAL(10,2),
    travel_covered_by VARCHAR,
    confirmation_deadline timestamp
);

CREATE TABLE game_scheduling_conflicts (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    conflict_type VARCHAR NOT NULL,
    affected_entity_type VARCHAR NOT NULL,
    affected_entity_id INTEGER NOT NULL,
    description text,
    severity VARCHAR,
    is_resolved boolean DEFAULT false,
    resolution_notes text,
    resolved_by INTEGER,
    resolved_at timestamp,
    created_at timestamp DEFAULT now()
);

CREATE TABLE appeals (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    appeal_type VARCHAR NOT NULL,
    entity_type VARCHAR NOT NULL,
    entity_id INTEGER NOT NULL,
    filed_by INTEGER NOT NULL,
    original_decision_description text,
    appeal_reason text NOT NULL,
    status appeal_status DEFAULT 'filed',
    filed_date date NOT NULL,
    decision_date date,
    decision_notes text,
    decided_by INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE appeal_workflow_steps (
    id SERIAL PRIMARY KEY,
    appeal_id INTEGER NOT NULL,
    step_number INTEGER NOT NULL,
    action VARCHAR NOT NULL,
    actor_id INTEGER,
    notes text,
    timestamp timestamp DEFAULT now(),
    created_at timestamp DEFAULT now()
);

CREATE TABLE coaching_notes (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    coach_id INTEGER NOT NULL,
    note_type VARCHAR,
    entity_type VARCHAR,
    entity_id INTEGER,
    title VARCHAR NOT NULL,
    content text NOT NULL,
    visibility VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE playbooks (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    description text,
    created_by INTEGER NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE playbook_diagrams (
    id SERIAL PRIMARY KEY,
    playbook_id INTEGER NOT NULL,
    play_name VARCHAR NOT NULL,
    description text,
    diagram_json text,
    diagram_image_url VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE team_advanced_stats (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    power_play_percentage DECIMAL(5,2),
    penalty_kill_percentage DECIMAL(5,2),
    goal_differential INTEGER,
    strength_of_schedule VARCHAR,
    corsi_for_percentage DECIMAL(5,2),
    fenwick_for_percentage DECIMAL(5,2),
    expected_goals_for DECIMAL(6,2),
    expected_goals_against DECIMAL(6,2),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_development_plans (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    coach_id INTEGER NOT NULL,
    goal_description text NOT NULL,
    skill_focus VARCHAR,
    start_date date NOT NULL,
    end_date date,
    status VARCHAR DEFAULT 'active',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE development_milestones (
    id SERIAL PRIMARY KEY,
    plan_id INTEGER NOT NULL,
    milestone_description text NOT NULL,
    target_date date,
    achieved_date date,
    assessment_notes text,
    achieved boolean DEFAULT false,
    created_at timestamp DEFAULT now()
);

CREATE TABLE player_contracts (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    contract_start_date date NOT NULL,
    contract_end_date date NOT NULL,
    salary_amount DECIMAL(10,2),
    signing_bonus DECIMAL(10,2),
    performance_bonuses text,
    guarantees text,
    clauses text,
    parent_guardian_consent boolean DEFAULT false,
    document_url VARCHAR,
    status VARCHAR DEFAULT 'active',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    contract_terms text,
    contract_type VARCHAR DEFAULT 'standard'
);

CREATE TABLE contract_terms (
    id SERIAL PRIMARY KEY,
    contract_id INTEGER NOT NULL,
    term_name VARCHAR NOT NULL,
    term_description text,
    term_value VARCHAR,
    created_at timestamp DEFAULT now()
);

CREATE TABLE league_bylaws (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    title VARCHAR NOT NULL,
    version VARCHAR NOT NULL,
    content text NOT NULL,
    effective_date date NOT NULL,
    document_url VARCHAR,
    created_by INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE rule_enforcement_log (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    bylaw_id INTEGER,
    rule_name VARCHAR NOT NULL,
    violation_entity_type VARCHAR NOT NULL,
    violation_entity_id INTEGER NOT NULL,
    enforcement_action text,
    severity VARCHAR,
    enforced_by INTEGER,
    enforced_date date,
    created_at timestamp DEFAULT now()
);

CREATE TABLE salary_cap_rules (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    total_cap_amount DECIMAL(10,2) NOT NULL,
    minimum_payroll DECIMAL(10,2),
    luxury_tax_threshold DECIMAL(10,2),
    exception_rules text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE salary_cap_tracking (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    total_payroll DECIMAL(10,2) DEFAULT 0,
    cap_room_remaining DECIMAL(10,2),
    exceeds_cap boolean DEFAULT false,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_movement_log (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    from_team_id INTEGER,
    to_team_id INTEGER,
    movement_type player_movement_type NOT NULL,
    movement_date date NOT NULL,
    reason text,
    documented_by INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE incident_reports (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    game_id INTEGER,
    incident_type incident_type NOT NULL,
    reported_by INTEGER NOT NULL,
    involved_player_id INTEGER,
    involved_official_id INTEGER,
    incident_description text NOT NULL,
    injury_reported boolean DEFAULT false,
    injury_details text,
    video_url VARCHAR,
    status incident_status DEFAULT 'reported',
    report_date timestamp DEFAULT now(),
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE incident_investigation (
    id SERIAL PRIMARY KEY,
    incident_id INTEGER NOT NULL,
    investigator_id INTEGER NOT NULL,
    investigation_start_date date NOT NULL,
    investigation_end_date date,
    findings text,
    recommended_action text,
    status VARCHAR DEFAULT 'in_progress',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE ticket_inventory (
    id SERIAL PRIMARY KEY,
    venue_id INTEGER NOT NULL,
    section VARCHAR NOT NULL,
    row VARCHAR NOT NULL,
    seat_number VARCHAR NOT NULL,
    seat_level VARCHAR,
    ticket_type ticket_type NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    status ticket_status DEFAULT 'available',
    created_at timestamp DEFAULT now()
);

CREATE TABLE ticket_sales (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    ticket_id INTEGER NOT NULL,
    buyer_name VARCHAR,
    buyer_email VARCHAR,
    buyer_phone VARCHAR,
    purchase_date timestamp DEFAULT now(),
    sale_price DECIMAL(10,2),
    payment_method VARCHAR,
    transaction_id VARCHAR,
    is_refunded boolean DEFAULT false,
    refund_date timestamp,
    created_at timestamp DEFAULT now()
);

CREATE TABLE merchandise_products (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    team_id INTEGER,
    merchandise_type merchandise_type NOT NULL,
    name VARCHAR NOT NULL,
    description text,
    sku VARCHAR UNIQUE,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER DEFAULT 0,
    status merchandise_status DEFAULT 'in_stock',
    image_url VARCHAR,
    shopify_product_id VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE merchandise_orders (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    buyer_id INTEGER,
    order_date timestamp DEFAULT now(),
    total_amount DECIMAL(10,2) NOT NULL,
    status order_status DEFAULT 'pending',
    shipping_address text,
    tracking_number VARCHAR,
    shipped_date timestamp,
    delivered_date timestamp,
    shopify_order_id VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE merchandise_order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    created_at timestamp DEFAULT now()
);

CREATE TABLE sponsorship_deliverables (
    id SERIAL PRIMARY KEY,
    sponsor_id INTEGER NOT NULL,
    deliverable_name VARCHAR NOT NULL,
    description text,
    expected_date date,
    actual_date date,
    status VARCHAR DEFAULT 'pending',
    created_at timestamp DEFAULT now()
);

CREATE TABLE sponsorship_payments (
    id SERIAL PRIMARY KEY,
    sponsor_id INTEGER NOT NULL,
    payment_amount DECIMAL(10,2) NOT NULL,
    payment_date date NOT NULL,
    payment_period VARCHAR,
    payment_method VARCHAR,
    transaction_id VARCHAR,
    invoice_number VARCHAR,
    notes text,
    recorded_by INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    season_id INTEGER,
    announcement_type announcement_type NOT NULL DEFAULT 'news',
    title VARCHAR NOT NULL,
    content text NOT NULL,
    published_by INTEGER NOT NULL,
    publish_date timestamp DEFAULT now(),
    expiration_date timestamp,
    is_featured boolean DEFAULT false,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    team_id INTEGER,
    published_by_user_id INTEGER,
    is_pinned boolean DEFAULT false,
    visibility VARCHAR DEFAULT 'public'
);

CREATE TABLE announcement_audience (
    id SERIAL PRIMARY KEY,
    announcement_id INTEGER NOT NULL,
    audience_type announcement_audience NOT NULL,
    target_entity_type VARCHAR,
    target_entity_id INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE fan_profiles (
    id SERIAL PRIMARY KEY,
    person_id INTEGER NOT NULL,
    organization_id INTEGER NOT NULL,
    favorite_team_id INTEGER,
    favorite_players VARCHAR,
    merchandise_interests VARCHAR,
    newsletter_subscribed boolean DEFAULT true,
    ticket_preference VARCHAR,
    vip_member boolean DEFAULT false,
    notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE social_media_accounts (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    platform VARCHAR NOT NULL,
    account_name VARCHAR NOT NULL,
    account_handle VARCHAR NOT NULL,
    api_token VARCHAR,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE social_media_posts (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    account_id INTEGER NOT NULL,
    content_type VARCHAR,
    content text NOT NULL,
    scheduled_time timestamp,
    published_time timestamp,
    entity_type VARCHAR,
    entity_id INTEGER,
    status VARCHAR DEFAULT 'draft',
    engagement_stats text,
    created_by INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE tournaments (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    description text,
    start_date date NOT NULL,
    end_date date NOT NULL,
    venue_id INTEGER,
    format tournament_format NOT NULL,
    status tournament_status DEFAULT 'registration_open',
    registration_deadline date,
    max_teams INTEGER,
    entry_fee DECIMAL(10,2),
    created_by INTEGER NOT NULL,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE tournament_teams (
    id SERIAL PRIMARY KEY,
    tournament_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    seed_position INTEGER,
    is_confirmed boolean DEFAULT true,
    registered_date date,
    created_at timestamp DEFAULT now()
);

CREATE TABLE tournament_brackets (
    id SERIAL PRIMARY KEY,
    tournament_id INTEGER NOT NULL,
    round INTEGER NOT NULL,
    bracket_position INTEGER NOT NULL,
    home_team_id INTEGER,
    away_team_id INTEGER,
    winner_team_id INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE season_archives (
    id SERIAL PRIMARY KEY,
    season_id INTEGER NOT NULL,
    organization_id INTEGER NOT NULL,
    archive_date date NOT NULL,
    standings_snapshot text,
    final_statistics_snapshot text,
    playoff_results text,
    champion_team_id INTEGER,
    archive_notes text,
    is_locked boolean DEFAULT true,
    created_by INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE dashboard_widgets (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    widget_type VARCHAR NOT NULL,
    position INTEGER,
    is_visible boolean DEFAULT true,
    settings text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE season_current (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL UNIQUE,
    season_id INTEGER NOT NULL,
    is_current boolean DEFAULT true,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE membership_lookup (
    id SERIAL PRIMARY KEY,
    membership_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL,
    organization_id INTEGER NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    tier_level membership_tier NOT NULL,
    status membership_status NOT NULL,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE team_season_rosters (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    player_count INTEGER DEFAULT 0,
    roster_status VARCHAR,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE division_team_lookup (
    id SERIAL PRIMARY KEY,
    division_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    team_name VARCHAR NOT NULL,
    abbreviation VARCHAR,
    created_at timestamp DEFAULT now()
);

CREATE TABLE player_lookup (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    jersey_number INTEGER,
    current_team_id INTEGER,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_contract_history (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    start_date date NOT NULL,
    end_date date,
    status VARCHAR,
    created_at timestamp DEFAULT now()
);

CREATE TABLE event_status_log (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    entity_type VARCHAR NOT NULL,
    entity_id INTEGER NOT NULL,
    old_status VARCHAR,
    new_status VARCHAR,
    changed_by INTEGER,
    changed_at timestamp DEFAULT now()
);

CREATE TABLE team_season_stats_cache (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    games_played INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    ties INTEGER DEFAULT 0,
    goals_for INTEGER DEFAULT 0,
    goals_against INTEGER DEFAULT 0,
    points INTEGER DEFAULT 0,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE bulk_import_staging (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    import_type VARCHAR NOT NULL,
    raw_data text NOT NULL,
    status VARCHAR DEFAULT 'pending',
    error_message text,
    imported_by INTEGER,
    imported_at timestamp,
    created_at timestamp DEFAULT now()
);

CREATE TABLE sheet_build_order (
    id SERIAL PRIMARY KEY,
    table_name VARCHAR NOT NULL UNIQUE,
    category table_category NOT NULL,
    priority_order INTEGER NOT NULL,
    primary_user_roles VARCHAR,
    update_frequency update_frequency,
    is_computed_or_denormalized boolean DEFAULT false,
    description text,
    ui_hints text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE user_preferences (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    theme VARCHAR DEFAULT 'light',
    language VARCHAR DEFAULT 'en',
    notifications_enabled boolean DEFAULT true,
    email_notifications boolean DEFAULT true,
    push_notifications boolean DEFAULT true,
    sms_notifications boolean DEFAULT false,
    privacy_level VARCHAR DEFAULT 'public',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE role_permissions (
    id SERIAL PRIMARY KEY,
    role_id INTEGER NOT NULL,
    permission_type permission_type NOT NULL,
    created_at timestamp DEFAULT now()
);

CREATE TABLE user_roles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    organization_id INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE clubs (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    club_name VARCHAR NOT NULL,
    club_code VARCHAR UNIQUE,
    logo_url VARCHAR,
    banner_url VARCHAR,
    home_color VARCHAR,
    away_color VARCHAR,
    description text,
    founded_year INTEGER,
    website_url VARCHAR,
    email VARCHAR,
    phone_number VARCHAR,
    address VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    is_archived boolean DEFAULT false
);

CREATE TABLE conferences (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    season_id INTEGER,
    conference_name VARCHAR NOT NULL,
    description text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE org_seasons (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    adoption_date date DEFAULT now(),
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now()
);

CREATE TABLE season_phases (
    id SERIAL PRIMARY KEY,
    season_id INTEGER NOT NULL,
    phase_name season_phase NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    description text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE team_managers (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    role VARCHAR DEFAULT 'manager',
    created_at timestamp DEFAULT now()
);

CREATE TABLE roster_players (
    id SERIAL PRIMARY KEY,
    roster_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    jersey_number INTEGER,
    position position NOT NULL,
    is_active boolean DEFAULT true,
    added_date date,
    removed_date date,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE lineup_players (
    id SERIAL PRIMARY KEY,
    lineup_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    jersey_number INTEGER,
    position position,
    line_number INTEGER,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE competitions (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    season_id INTEGER,
    competition_name VARCHAR NOT NULL,
    competition_type VARCHAR,
    description text,
    start_date date,
    end_date date,
    logo_url VARCHAR,
    banner_url VARCHAR,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    is_archived boolean DEFAULT false
);

CREATE TABLE competition_teams (
    id SERIAL PRIMARY KEY,
    competition_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    joined_date date,
    left_date date,
    created_at timestamp DEFAULT now()
);

CREATE TABLE brackets (
    id SERIAL PRIMARY KEY,
    competition_id INTEGER NOT NULL,
    bracket_name VARCHAR NOT NULL,
    bracket_type bracket_type NOT NULL,
    bracket_status bracket_status DEFAULT 'scheduled',
    description text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE playoff_rounds (
    id SERIAL PRIMARY KEY,
    competition_id INTEGER NOT NULL,
    bracket_id INTEGER,
    season_id INTEGER,
    round_name VARCHAR NOT NULL,
    round_number INTEGER NOT NULL,
    round_format VARCHAR NOT NULL,
    start_date date,
    end_date date,
    description text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE playoff_series (
    id SERIAL PRIMARY KEY,
    playoff_round_id INTEGER NOT NULL,
    team_a_id INTEGER NOT NULL,
    team_b_id INTEGER NOT NULL,
    series_format VARCHAR NOT NULL,
    games_to_win INTEGER,
    team_a_wins INTEGER DEFAULT 0,
    team_b_wins INTEGER DEFAULT 0,
    team_a_games INTEGER DEFAULT 0,
    team_b_games INTEGER DEFAULT 0,
    winner_team_id INTEGER,
    series_status VARCHAR DEFAULT 'scheduled',
    series_start_date date,
    series_end_date date,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE playoff_series_games (
    id SERIAL PRIMARY KEY,
    playoff_series_id INTEGER NOT NULL,
    game_id INTEGER NOT NULL,
    game_number_in_series INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE bracket_teams (
    id SERIAL PRIMARY KEY,
    bracket_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    seed_number INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE bracket_matches (
    id SERIAL PRIMARY KEY,
    bracket_id INTEGER NOT NULL,
    round_number INTEGER,
    match_number INTEGER,
    team_a_id INTEGER,
    team_b_id INTEGER,
    game_id INTEGER,
    winner_team_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE ice_time_bookings (
    id SERIAL PRIMARY KEY,
    venue_id INTEGER NOT NULL,
    organization_id INTEGER,
    team_id INTEGER,
    booking_date date NOT NULL,
    start_time time NOT NULL,
    end_time time NOT NULL,
    duration_minutes INTEGER,
    booking_type VARCHAR NOT NULL,
    booking_status VARCHAR DEFAULT 'confirmed',
    booker_user_id INTEGER,
    booking_cost DECIMAL(10,2),
    notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE ice_time_availability (
    id SERIAL PRIMARY KEY,
    venue_id INTEGER NOT NULL,
    day_of_week INTEGER NOT NULL,
    start_time time NOT NULL,
    end_time time NOT NULL,
    is_available boolean DEFAULT true,
    notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE team_standings (
    id SERIAL PRIMARY KEY,
    division_id INTEGER,
    conference_id INTEGER,
    competition_id INTEGER,
    season_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    rank INTEGER,
    games_played INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    ties INTEGER DEFAULT 0,
    overtimes INTEGER DEFAULT 0,
    points INTEGER DEFAULT 0,
    goals_for INTEGER DEFAULT 0,
    goals_against INTEGER DEFAULT 0,
    goal_differential INTEGER DEFAULT 0,
    updated_at timestamp DEFAULT now()
);

CREATE TABLE team_goals (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    goal_name VARCHAR NOT NULL,
    goal_type VARCHAR NOT NULL,
    target_value DECIMAL(15,2) NOT NULL,
    current_value DECIMAL(15,2) DEFAULT 0,
    progress_percentage DECIMAL(5,2) DEFAULT 0,
    status VARCHAR DEFAULT 'in_progress',
    created_by_user_id INTEGER,
    created_date date NOT NULL,
    target_date date NOT NULL,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE team_kpis (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    kpi_name VARCHAR NOT NULL,
    kpi_category VARCHAR NOT NULL,
    kpi_value DECIMAL(15,3),
    kpi_target DECIMAL(15,3),
    benchmark_value DECIMAL(15,3),
    measurement_period VARCHAR DEFAULT 'season',
    last_calculated_at timestamp,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE team_kpi_history (
    id SERIAL PRIMARY KEY,
    team_kpi_id INTEGER NOT NULL,
    kpi_value DECIMAL(15,3),
    recorded_date date NOT NULL,
    created_at timestamp DEFAULT now()
);

CREATE TABLE season_objectives (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    objective_name VARCHAR NOT NULL,
    objective_description text,
    priority VARCHAR DEFAULT 'medium',
    status VARCHAR DEFAULT 'pending',
    start_date date,
    target_completion_date date,
    completed_date date,
    owner_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_drafts (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    competition_id INTEGER,
    draft_name VARCHAR NOT NULL,
    draft_status draft_status DEFAULT 'open',
    draft_date date,
    draft_start_time time,
    description text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE draft_teams (
    id SERIAL PRIMARY KEY,
    draft_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    draft_order INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE draft_picks (
    id SERIAL PRIMARY KEY,
    draft_id INTEGER NOT NULL,
    draft_team_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    pick_number INTEGER,
    pick_status draft_pick_status DEFAULT 'available',
    trading_team_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE scorekeeper_default_settings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    period_duration_minutes INTEGER DEFAULT 20,
    intermission_duration_minutes INTEGER DEFAULT 15,
    overtime_duration_minutes INTEGER DEFAULT 5,
    overtime_format VARCHAR DEFAULT '3v3',
    shootout_format VARCHAR DEFAULT '5',
    icing_rule VARCHAR DEFAULT 'touch',
    offside_rule VARCHAR DEFAULT 'traditional',
    auto_clock_start boolean DEFAULT true,
    auto_clock_stop boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE scorekeeper_game_settings (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    period_duration_minutes INTEGER DEFAULT 20,
    intermission_duration_minutes INTEGER DEFAULT 15,
    overtime_duration_minutes INTEGER DEFAULT 5,
    overtime_format VARCHAR DEFAULT '3v3',
    shootout_format VARCHAR DEFAULT '5',
    icing_rule VARCHAR DEFAULT 'touch',
    offside_rule VARCHAR DEFAULT 'traditional',
    scorekeeper_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE scorekeeper_sessions (
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL,
    scorekeeper_user_id INTEGER NOT NULL,
    session_start timestamp,
    session_end timestamp,
    current_period game_period,
    period_time_seconds INTEGER,
    home_team_score INTEGER DEFAULT 0,
    away_team_score INTEGER DEFAULT 0,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_injuries (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    injury_type VARCHAR NOT NULL,
    injury_description text,
    unavailable_start_date date NOT NULL,
    unavailable_end_date date,
    is_active boolean DEFAULT true,
    created_by_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_transfers (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    from_team_id INTEGER NOT NULL,
    to_team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    transfer_date date NOT NULL,
    transfer_reason text,
    transfer_type VARCHAR DEFAULT 'trade',
    approved_by_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_discipline (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    organization_id INTEGER NOT NULL,
    discipline_type discipline_type NOT NULL,
    reason text NOT NULL,
    suspension_games INTEGER,
    fined_amount DECIMAL(10,2),
    imposed_date date NOT NULL,
    imposed_by_user_id INTEGER,
    appeal_reason text,
    appeal_status VARCHAR DEFAULT 'none',
    resolved_date date,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_salary (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    salary_amount DECIMAL(15,2) NOT NULL,
    payment_schedule VARCHAR DEFAULT 'monthly',
    currency VARCHAR DEFAULT 'USD',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_ratings (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    rater_user_id INTEGER NOT NULL,
    rating_value DECIMAL(3,2) NOT NULL,
    rating_comment text,
    rating_date date NOT NULL,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL,
    equipment_name VARCHAR NOT NULL,
    equipment_type VARCHAR NOT NULL,
    equipment_code VARCHAR UNIQUE,
    quantity_total INTEGER DEFAULT 0,
    quantity_available INTEGER DEFAULT 0,
    unit_cost DECIMAL(10,2),
    purchase_date date,
    warranty_expiry_date date,
    condition VARCHAR DEFAULT 'good',
    supplier VARCHAR,
    notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE player_sticks (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    stick_brand VARCHAR NOT NULL,
    stick_model VARCHAR NOT NULL,
    stick_flex VARCHAR NOT NULL,
    stick_curve VARCHAR NOT NULL,
    stick_year INTEGER,
    stick_length_cm DECIMAL(5,2),
    stick_handedness VARCHAR NOT NULL,
    stick_weight_grams INTEGER,
    performance_class VARCHAR DEFAULT 'intermediate',
    condition VARCHAR DEFAULT 'good',
    purchase_date date,
    notes text,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE equipment_assignments (
    id SERIAL PRIMARY KEY,
    equipment_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    assigned_date date NOT NULL,
    returned_date date,
    assignment_notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE equipment_maintenance (
    id SERIAL PRIMARY KEY,
    equipment_id INTEGER NOT NULL,
    maintenance_type VARCHAR NOT NULL,
    maintenance_date date NOT NULL,
    performed_by_user_id INTEGER,
    maintenance_notes text,
    cost DECIMAL(10,2),
    next_maintenance_date date,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE officials (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL,
    organization_id INTEGER NOT NULL,
    official_role official_role NOT NULL,
    certification_level official_certification_level DEFAULT 'rookie',
    license_number VARCHAR UNIQUE,
    license_expiry_date date,
    biography text,
    years_of_experience INTEGER,
    availability_notes text,
    home_city VARCHAR,
    travel_willing_distance_km DECIMAL(10,2),
    preferred_compensation_type VARCHAR,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE official_ratings (
    id SERIAL PRIMARY KEY,
    official_id INTEGER NOT NULL,
    game_id INTEGER NOT NULL,
    rater_user_id INTEGER NOT NULL,
    rating_value DECIMAL(3,2) NOT NULL,
    rating_comment text,
    performance_notes text,
    rating_date date NOT NULL,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE ijshockey_sync_log (
    id SERIAL PRIMARY KEY,
    entity_type VARCHAR NOT NULL,
    entity_id INTEGER NOT NULL,
    ijshockey_id VARCHAR NOT NULL,
    last_synced_at timestamp,
    sync_status VARCHAR DEFAULT 'synced',
    sync_notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER,
    team_id INTEGER,
    invoice_number VARCHAR NOT NULL UNIQUE,
    invoice_date date NOT NULL,
    due_date date NOT NULL,
    total_amount DECIMAL(15,2) NOT NULL,
    description text,
    invoice_status invoice_status DEFAULT 'draft',
    issued_by_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE invoice_items (
    id SERIAL PRIMARY KEY,
    invoice_id INTEGER NOT NULL,
    item_description VARCHAR NOT NULL,
    quantity INTEGER DEFAULT 1,
    unit_price DECIMAL(15,2) NOT NULL,
    line_total DECIMAL(15,2) NOT NULL,
    created_at timestamp DEFAULT now()
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    invoice_id INTEGER NOT NULL,
    payment_date date NOT NULL,
    payment_amount DECIMAL(15,2) NOT NULL,
    payment_method payment_method NOT NULL,
    payment_status payment_status DEFAULT 'pending',
    transaction_reference VARCHAR,
    notes text,
    processed_by_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    entity_type VARCHAR NOT NULL,
    entity_id INTEGER NOT NULL,
    action audit_action NOT NULL,
    changes text,
    ip_address VARCHAR,
    user_agent text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE notification_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    notification_type notification_type NOT NULL,
    content text NOT NULL,
    sent_at timestamp DEFAULT now(),
    read_at timestamp,
    delivery_method VARCHAR DEFAULT 'in_app',
    delivery_status VARCHAR DEFAULT 'sent',
    related_entity_type VARCHAR,
    related_entity_id INTEGER,
    created_at timestamp DEFAULT now()
);

CREATE TABLE media (
    id SERIAL PRIMARY KEY,
    media_name VARCHAR NOT NULL,
    media_type VARCHAR,
    media_url VARCHAR NOT NULL,
    file_size_bytes INTEGER,
    bucket_name VARCHAR,
    file_path VARCHAR,
    organization_id INTEGER,
    team_id INTEGER,
    player_id INTEGER,
    person_id INTEGER,
    game_id INTEGER,
    created_by_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE user_timezone (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE,
    timezone VARCHAR NOT NULL DEFAULT 'UTC',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE fan_memberships (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    membership_tier_id INTEGER NOT NULL,
    membership_number VARCHAR UNIQUE,
    enrollment_date date NOT NULL,
    renewal_date date,
    expiry_date date,
    membership_status VARCHAR DEFAULT 'active',
    notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE loyalty_points (
    id SERIAL PRIMARY KEY,
    fan_membership_id INTEGER NOT NULL,
    points_amount INTEGER NOT NULL,
    points_earned_date date NOT NULL,
    expiry_date date,
    transaction_type VARCHAR NOT NULL,
    transaction_reference VARCHAR,
    notes text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE season_tickets (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    ticket_package_name VARCHAR NOT NULL,
    ticket_count INTEGER DEFAULT 1,
    seat_locations text,
    ticket_price DECIMAL(10,2),
    purchase_date date,
    ticket_status VARCHAR DEFAULT 'active',
    renewal_reminder_sent boolean DEFAULT false,
    notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE fan_clubs (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    team_id INTEGER,
    fan_club_name VARCHAR NOT NULL,
    club_description text,
    logo_url VARCHAR,
    member_count INTEGER DEFAULT 0,
    founded_date date,
    is_official boolean DEFAULT false,
    accreditation_status VARCHAR,
    accreditation_expiry_date date,
    contact_email VARCHAR,
    website_url VARCHAR,
    social_media_url VARCHAR,
    created_by_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE fan_club_members (
    id SERIAL PRIMARY KEY,
    fan_club_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    join_date date NOT NULL,
    member_status VARCHAR DEFAULT 'active',
    role VARCHAR DEFAULT 'member',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE advertisements (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    ad_title VARCHAR NOT NULL,
    ad_description text,
    ad_type VARCHAR NOT NULL,
    ad_content_url VARCHAR,
    ad_status VARCHAR DEFAULT 'draft',
    start_date date NOT NULL,
    end_date date,
    budget DECIMAL(15,2),
    spent_amount DECIMAL(15,2) DEFAULT 0,
    impressions INTEGER DEFAULT 0,
    clicks INTEGER DEFAULT 0,
    created_by_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE ad_placements (
    id SERIAL PRIMARY KEY,
    advertisement_id INTEGER NOT NULL,
    placement_type VARCHAR NOT NULL,
    venue_id INTEGER,
    team_id INTEGER,
    competition_id INTEGER,
    game_id INTEGER,
    location_description VARCHAR,
    placement_start_date date,
    placement_end_date date,
    placement_status VARCHAR DEFAULT 'active',
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE stick_customization_orders (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    order_number VARCHAR NOT NULL UNIQUE,
    order_date date NOT NULL,
    delivery_date date,
    stick_quantity INTEGER DEFAULT 1,
    total_cost DECIMAL(15,2),
    order_status VARCHAR DEFAULT 'pending',
    production_notes text,
    tracking_url VARCHAR,
    created_by_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE stick_customization_specs (
    id SERIAL PRIMARY KEY,
    customization_order_id INTEGER NOT NULL,
    stick_number INTEGER DEFAULT 1,
    base_product_id INTEGER,
    flex VARCHAR NOT NULL,
    curve VARCHAR NOT NULL,
    length_cm DECIMAL(5,2) NOT NULL,
    weight_grams INTEGER,
    blade_thickness VARCHAR,
    blade_pattern VARCHAR,
    shaft_material VARCHAR,
    grip_type VARCHAR,
    graphics_design text,
    color_primary VARCHAR,
    color_secondary VARCHAR,
    personalization text,
    special_requests text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE team_rivalries (
    id SERIAL PRIMARY KEY,
    team_a_id INTEGER NOT NULL,
    team_b_id INTEGER NOT NULL,
    organization_id INTEGER NOT NULL,
    rivalry_name VARCHAR,
    rivalry_status VARCHAR DEFAULT 'active',
    rivalry_type VARCHAR,
    established_date date,
    rivalry_description text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE rivalry_stats (
    id SERIAL PRIMARY KEY,
    team_rivalry_id INTEGER NOT NULL,
    season_id INTEGER NOT NULL,
    team_a_wins INTEGER DEFAULT 0,
    team_b_wins INTEGER DEFAULT 0,
    ties INTEGER DEFAULT 0,
    games_played INTEGER DEFAULT 0,
    team_a_goals INTEGER DEFAULT 0,
    team_b_goals INTEGER DEFAULT 0,
    last_meeting_date date,
    next_meeting_date date,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE lineup_units (
    id SERIAL PRIMARY KEY,
    lineup_id INTEGER NOT NULL,
    unit_type VARCHAR NOT NULL,
    unit_name VARCHAR,
    unit_number INTEGER,
    formation VARCHAR,
    strategy_notes text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE lineup_unit_players (
    id SERIAL PRIMARY KEY,
    lineup_unit_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    position position NOT NULL,
    line_position INTEGER,
    player_order INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE stick_products (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    product_name VARCHAR NOT NULL,
    brand VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    flex VARCHAR,
    curve VARCHAR,
    description text,
    product_url VARCHAR,
    price DECIMAL(10,2),
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE stick_polls (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    stick_product_id INTEGER,
    poll_title VARCHAR NOT NULL,
    poll_question text NOT NULL,
    poll_type VARCHAR NOT NULL,
    poll_options text,
    start_date timestamp NOT NULL,
    end_date timestamp,
    is_active boolean DEFAULT true,
    created_by_user_id INTEGER,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE stick_poll_responses (
    id SERIAL PRIMARY KEY,
    stick_poll_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    response_value text NOT NULL,
    response_notes text,
    responded_at timestamp DEFAULT now(),
    created_at timestamp DEFAULT now()
);

CREATE TABLE stick_feedback (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL,
    stick_product_id INTEGER,
    player_stick_id INTEGER,
    feedback_title VARCHAR NOT NULL,
    feedback_content text NOT NULL,
    rating_value DECIMAL(3,2),
    performance_areas text,
    pros text,
    cons text,
    would_recommend boolean,
    usage_context VARCHAR,
    submitted_by_user_id INTEGER NOT NULL,
    submitted_at timestamp DEFAULT now(),
    is_public boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE stick_recommendations (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    recommended_stick_product_id INTEGER NOT NULL,
    recommendation_reason text NOT NULL,
    suggested_flex VARCHAR,
    suggested_curve VARCHAR,
    suggested_length_cm DECIMAL(5,2),
    performance_benefits text,
    target_use_case VARCHAR,
    recommendation_status VARCHAR DEFAULT 'pending',
    accepted_at timestamp,
    feedback_on_recommendation text,
    recommended_by_user_id INTEGER NOT NULL,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE schema_tables (
    id SERIAL PRIMARY KEY,
    table_name VARCHAR NOT NULL UNIQUE,
    table_category VARCHAR,
    description text,
    row_count INTEGER DEFAULT 0,
    is_core_table boolean DEFAULT false,
    is_archived boolean DEFAULT false,
    archive_date timestamp,
    archival_reason text,
    deleted_at timestamp,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE app_settings (
    id SERIAL PRIMARY KEY,
    setting_key VARCHAR NOT NULL UNIQUE,
    setting_value text NOT NULL,
    setting_type VARCHAR,
    description text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE first_time_setup (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    organization_id INTEGER,
    setup_step VARCHAR,
    is_completed boolean DEFAULT false,
    completed_at timestamp,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE shopify_integration (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    shopify_shop_name VARCHAR NOT NULL,
    api_key VARCHAR NOT NULL,
    api_password VARCHAR,
    access_token VARCHAR,
    webhook_url VARCHAR,
    is_active boolean DEFAULT true,
    last_sync_time timestamp,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE shopify_product_sync (
    id SERIAL PRIMARY KEY,
    shopify_integration_id INTEGER NOT NULL,
    shopify_product_id VARCHAR,
    product_name VARCHAR,
    product_description text,
    product_price DECIMAL(15,2),
    sync_status shopify_sync_status DEFAULT 'pending',
    last_synced_at timestamp,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE gas_integration (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    script_project_id VARCHAR NOT NULL,
    api_key VARCHAR NOT NULL,
    script_url VARCHAR,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE gas_executions (
    id SERIAL PRIMARY KEY,
    gas_integration_id INTEGER NOT NULL,
    script_name VARCHAR,
    execution_status VARCHAR,
    execution_result text,
    executed_at timestamp,
    created_at timestamp DEFAULT now()
);

CREATE TABLE google_sheets_config (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    sheet_id VARCHAR NOT NULL,
    sheet_name VARCHAR,
    sheet_url VARCHAR,
    api_key VARCHAR NOT NULL,
    sync_direction VARCHAR DEFAULT 'bidirectional',
    is_active boolean DEFAULT true,
    last_synced_at timestamp,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE google_sheets_sync_log (
    id SERIAL PRIMARY KEY,
    google_sheets_config_id INTEGER NOT NULL,
    sync_type VARCHAR,
    rows_synced INTEGER,
    sync_status VARCHAR,
    error_message text,
    synced_at timestamp,
    created_at timestamp DEFAULT now()
);

CREATE TABLE archived_records (
    id SERIAL PRIMARY KEY,
    entity_type VARCHAR NOT NULL,
    entity_id INTEGER NOT NULL,
    entity_data text NOT NULL,
    archived_by_user_id INTEGER,
    archived_reason text,
    archived_at timestamp DEFAULT now()
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    job_name VARCHAR NOT NULL,
    job_type VARCHAR,
    job_status VARCHAR DEFAULT 'pending',
    job_payload text,
    retry_count INTEGER DEFAULT 0,
    max_retries INTEGER DEFAULT 3,
    created_at timestamp DEFAULT now(),
    started_at timestamp,
    completed_at timestamp,
    error_message text,
    created_by_user_id INTEGER
);

CREATE TABLE template_entity (
    id SERIAL PRIMARY KEY,
    parent_id INTEGER,
    name VARCHAR NOT NULL,
    description text,
    code VARCHAR UNIQUE,
    is_active boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE template_link (
    id SERIAL PRIMARY KEY,
    entity_a_id INTEGER NOT NULL,
    entity_b_id INTEGER NOT NULL,
    status VARCHAR DEFAULT 'active',
    assigned_date date,
    notes text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE template_settings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    setting_key VARCHAR NOT NULL,
    setting_value text NOT NULL,
    setting_type VARCHAR DEFAULT 'string',
    is_enabled boolean DEFAULT true,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE template_log (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    entity_type VARCHAR NOT NULL,
    entity_id INTEGER NOT NULL,
    action VARCHAR NOT NULL,
    details text,
    ip_address VARCHAR,
    created_at timestamp DEFAULT now()
);


-- ==========================================
-- INDEXES & UNIQUE CONSTRAINTS
-- ==========================================

CREATE UNIQUE INDEX idx_roles_organization_id_name ON roles (organization_id, name);
CREATE UNIQUE INDEX idx_membership_tiers_organization_id_tier_level ON membership_tiers (organization_id, tier_level);
CREATE UNIQUE INDEX idx_memberships_organization_id_person_id ON memberships (organization_id, person_id);
CREATE UNIQUE INDEX idx_team_staff_team_id_season_id_person_id ON team_staff (team_id, season_id, person_id);
CREATE UNIQUE INDEX idx_game_officials_game_id_person_id ON game_officials (game_id, person_id);
CREATE UNIQUE INDEX idx_game_captains_game_id_team_id ON game_captains (game_id, team_id);
CREATE UNIQUE INDEX idx_rosters_team_id_player_id_season_id ON rosters (team_id, player_id, season_id);
CREATE UNIQUE INDEX idx_rosters_team_id_season_id ON rosters (team_id, season_id);
CREATE UNIQUE INDEX idx_standings_division_id_team_id ON standings (division_id, team_id);
CREATE UNIQUE INDEX idx_player_statistics_player_id_season_id_team_id ON player_statistics (player_id, season_id, team_id);
CREATE UNIQUE INDEX idx_team_statistics_team_id_season_id ON team_statistics (team_id, season_id);
CREATE UNIQUE INDEX idx_playoff_brackets_season_id_division_id_round_bracket_pos ON playoff_brackets (season_id, division_id, round, bracket_position);
CREATE UNIQUE INDEX idx_playoff_seedings_season_id_division_id_team_id ON playoff_seedings (season_id, division_id, team_id);
CREATE UNIQUE INDEX idx_event_rsvps_event_id_user_id ON event_rsvps (event_id, user_id);
CREATE INDEX idx_messages_sender_user_id_created_at ON messages (sender_user_id, created_at);
CREATE INDEX idx_messages_recipient_user_id_created_at ON messages (recipient_user_id, created_at);
CREATE INDEX idx_messages_team_id_created_at ON messages (team_id, created_at);
CREATE UNIQUE INDEX idx_system_settings_organization_id_setting_key ON system_settings (organization_id, setting_key);
CREATE UNIQUE INDEX idx_definitions_organization_id_definition_key ON definitions (organization_id, definition_key);
CREATE UNIQUE INDEX idx_game_attendance_game_id_user_id ON game_attendance (game_id, user_id);
CREATE UNIQUE INDEX idx_game_periods_game_id_period_number ON game_periods (game_id, period_number);
CREATE UNIQUE INDEX idx_team_versus_team_records_season_id_team_a_id_team_b_id ON team_versus_team_records (season_id, team_a_id, team_b_id);
CREATE UNIQUE INDEX idx_goalie_statistics_player_id_season_id_team_id ON goalie_statistics (player_id, season_id, team_id);
CREATE UNIQUE INDEX idx_groups_organization_id_name ON groups (organization_id, name);
CREATE UNIQUE INDEX idx_group_members_group_id_member_type_member_id ON group_members (group_id, member_type, member_id);
CREATE UNIQUE INDEX idx_practice_attendance_practice_id_player_id ON practice_attendance (practice_id, player_id);
CREATE UNIQUE INDEX idx_practice_attendance_practice_session_id_user_id ON practice_attendance (practice_session_id, user_id);
CREATE UNIQUE INDEX idx_official_assignments_game_id_official_id ON official_assignments (game_id, official_id);
CREATE UNIQUE INDEX idx_playbooks_team_id_season_id_name ON playbooks (team_id, season_id, name);
CREATE UNIQUE INDEX idx_team_advanced_stats_team_id_season_id ON team_advanced_stats (team_id, season_id);
CREATE UNIQUE INDEX idx_player_contracts_player_id_team_id_season_id ON player_contracts (player_id, team_id, season_id);
CREATE UNIQUE INDEX idx_league_bylaws_organization_id_season_id_version ON league_bylaws (organization_id, season_id, version);
CREATE UNIQUE INDEX idx_salary_cap_rules_organization_id_season_id ON salary_cap_rules (organization_id, season_id);
CREATE UNIQUE INDEX idx_salary_cap_tracking_team_id_season_id ON salary_cap_tracking (team_id, season_id);
CREATE UNIQUE INDEX idx_ticket_inventory_venue_id_section_row_seat_number ON ticket_inventory (venue_id, section, row, seat_number);
CREATE INDEX idx_ticket_sales_game_id ON ticket_sales (game_id);
CREATE UNIQUE INDEX idx_fan_profiles_person_id_organization_id ON fan_profiles (person_id, organization_id);
CREATE UNIQUE INDEX idx_tournament_teams_tournament_id_team_id ON tournament_teams (tournament_id, team_id);
CREATE UNIQUE INDEX idx_tournament_brackets_tournament_id_round_bracket_position ON tournament_brackets (tournament_id, round, bracket_position);
CREATE UNIQUE INDEX idx_membership_lookup_organization_id_person_id ON membership_lookup (organization_id, person_id);
CREATE UNIQUE INDEX idx_team_season_rosters_team_id_season_id ON team_season_rosters (team_id, season_id);
CREATE UNIQUE INDEX idx_division_team_lookup_division_id_team_id ON division_team_lookup (division_id, team_id);
CREATE UNIQUE INDEX idx_team_season_stats_cache_team_id_season_id ON team_season_stats_cache (team_id, season_id);
CREATE UNIQUE INDEX idx_user_roles_user_id_role_id_organization_id ON user_roles (user_id, role_id, organization_id);
CREATE UNIQUE INDEX idx_org_seasons_organization_id_season_id ON org_seasons (organization_id, season_id);
CREATE UNIQUE INDEX idx_team_managers_team_id_user_id ON team_managers (team_id, user_id);
CREATE UNIQUE INDEX idx_roster_players_roster_id_player_id ON roster_players (roster_id, player_id);
CREATE UNIQUE INDEX idx_lineup_players_lineup_id_player_id ON lineup_players (lineup_id, player_id);
CREATE UNIQUE INDEX idx_competition_teams_competition_id_team_id ON competition_teams (competition_id, team_id);
CREATE UNIQUE INDEX idx_playoff_rounds_competition_id_round_number ON playoff_rounds (competition_id, round_number);
CREATE UNIQUE INDEX idx_playoff_series_playoff_round_id_team_a_id_team_b_id ON playoff_series (playoff_round_id, team_a_id, team_b_id);
CREATE UNIQUE INDEX idx_playoff_series_games_playoff_series_id_game_id ON playoff_series_games (playoff_series_id, game_id);
CREATE UNIQUE INDEX idx_bracket_teams_bracket_id_team_id ON bracket_teams (bracket_id, team_id);
CREATE UNIQUE INDEX idx_ice_time_bookings_venue_id_booking_date_start_time ON ice_time_bookings (venue_id, booking_date, start_time);
CREATE UNIQUE INDEX idx_team_standings_season_id_team_id ON team_standings (season_id, team_id);
CREATE UNIQUE INDEX idx_team_kpis_team_id_season_id_kpi_name ON team_kpis (team_id, season_id, kpi_name);
CREATE UNIQUE INDEX idx_draft_teams_draft_id_team_id ON draft_teams (draft_id, team_id);
CREATE UNIQUE INDEX idx_player_salary_player_id_team_id_season_id ON player_salary (player_id, team_id, season_id);
CREATE UNIQUE INDEX idx_equipment_assignments_equipment_id_player_id_assigned_da ON equipment_assignments (equipment_id, player_id, assigned_date);
CREATE UNIQUE INDEX idx_ijshockey_sync_log_entity_type_entity_id ON ijshockey_sync_log (entity_type, entity_id);
CREATE INDEX idx_audit_logs_entity_type_entity_id_created_at ON audit_logs (entity_type, entity_id, created_at);
CREATE INDEX idx_audit_logs_user_id_created_at ON audit_logs (user_id, created_at);
CREATE INDEX idx_notification_logs_user_id_created_at ON notification_logs (user_id, created_at);
CREATE UNIQUE INDEX idx_fan_memberships_organization_id_user_id ON fan_memberships (organization_id, user_id);
CREATE UNIQUE INDEX idx_fan_club_members_fan_club_id_user_id ON fan_club_members (fan_club_id, user_id);
CREATE INDEX idx_ad_placements_advertisement_id_placement_type ON ad_placements (advertisement_id, placement_type);
CREATE UNIQUE INDEX idx_stick_customization_specs_customization_order_id_stick_n ON stick_customization_specs (customization_order_id, stick_number);
CREATE UNIQUE INDEX idx_team_rivalries_team_a_id_team_b_id ON team_rivalries (team_a_id, team_b_id);
CREATE UNIQUE INDEX idx_rivalry_stats_team_rivalry_id_season_id ON rivalry_stats (team_rivalry_id, season_id);
CREATE UNIQUE INDEX idx_lineup_units_lineup_id_unit_type_unit_number ON lineup_units (lineup_id, unit_type, unit_number);
CREATE UNIQUE INDEX idx_lineup_unit_players_lineup_unit_id_player_id ON lineup_unit_players (lineup_unit_id, player_id);
CREATE UNIQUE INDEX idx_stick_products_organization_id_brand_model ON stick_products (organization_id, brand, model);
CREATE UNIQUE INDEX idx_stick_poll_responses_stick_poll_id_player_id ON stick_poll_responses (stick_poll_id, player_id);
CREATE UNIQUE INDEX idx_template_link_entity_a_id_entity_b_id ON template_link (entity_a_id, entity_b_id);
CREATE UNIQUE INDEX idx_template_settings_organization_id_setting_key ON template_settings (organization_id, setting_key);
CREATE INDEX idx_template_log_entity_type_entity_id_created_at ON template_log (entity_type, entity_id, created_at);
CREATE INDEX idx_template_log_user_id_created_at ON template_log (user_id, created_at);

-- ==========================================
-- RELATIONS
-- ==========================================

ALTER TABLE roles ADD CONSTRAINT fk_roles_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE users ADD CONSTRAINT fk_users_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE users ADD CONSTRAINT fk_users_role_id_roles FOREIGN KEY (role_id) REFERENCES roles(id);
ALTER TABLE users ADD CONSTRAINT fk_users_preferred_organization_id_organizations FOREIGN KEY (preferred_organization_id) REFERENCES organizations(id);
ALTER TABLE membership_tiers ADD CONSTRAINT fk_membership_tiers_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE membership_benefits ADD CONSTRAINT fk_membership_benefits_tier_id_membership_tiers FOREIGN KEY (tier_id) REFERENCES membership_tiers(id);
ALTER TABLE memberships ADD CONSTRAINT fk_memberships_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE memberships ADD CONSTRAINT fk_memberships_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE memberships ADD CONSTRAINT fk_memberships_tier_id_membership_tiers FOREIGN KEY (tier_id) REFERENCES membership_tiers(id);
ALTER TABLE membership_fees ADD CONSTRAINT fk_membership_fees_membership_id_memberships FOREIGN KEY (membership_id) REFERENCES memberships(id);
ALTER TABLE membership_fees ADD CONSTRAINT fk_membership_fees_paid_by_users FOREIGN KEY (paid_by) REFERENCES users(id);
ALTER TABLE membership_history ADD CONSTRAINT fk_membership_history_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE membership_history ADD CONSTRAINT fk_membership_history_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE membership_history ADD CONSTRAINT fk_membership_history_tier_id_membership_tiers FOREIGN KEY (tier_id) REFERENCES membership_tiers(id);
ALTER TABLE member_status_log ADD CONSTRAINT fk_member_status_log_membership_id_memberships FOREIGN KEY (membership_id) REFERENCES memberships(id);
ALTER TABLE member_status_log ADD CONSTRAINT fk_member_status_log_changed_by_users FOREIGN KEY (changed_by) REFERENCES users(id);
ALTER TABLE user_profiles ADD CONSTRAINT fk_user_profiles_user_id_users FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE organizations ADD CONSTRAINT fk_organizations_parent_organization_id_organizations FOREIGN KEY (parent_organization_id) REFERENCES organizations(id);
ALTER TABLE retailers ADD CONSTRAINT fk_retailers_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE sponsors ADD CONSTRAINT fk_sponsors_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE sponsors ADD CONSTRAINT fk_sponsors_brand_id_brands FOREIGN KEY (brand_id) REFERENCES brands(id);
ALTER TABLE leagues ADD CONSTRAINT fk_leagues_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE seasons ADD CONSTRAINT fk_seasons_league_id_leagues FOREIGN KEY (league_id) REFERENCES leagues(id);
ALTER TABLE seasons ADD CONSTRAINT fk_seasons_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE divisions ADD CONSTRAINT fk_divisions_league_id_leagues FOREIGN KEY (league_id) REFERENCES leagues(id);
ALTER TABLE divisions ADD CONSTRAINT fk_divisions_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE teams ADD CONSTRAINT fk_teams_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE teams ADD CONSTRAINT fk_teams_division_id_divisions FOREIGN KEY (division_id) REFERENCES divisions(id);
ALTER TABLE teams ADD CONSTRAINT fk_teams_practice_venue_id_venues FOREIGN KEY (practice_venue_id) REFERENCES venues(id);
ALTER TABLE team_profiles ADD CONSTRAINT fk_team_profiles_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE farm_teams ADD CONSTRAINT fk_farm_teams_parent_team_id_teams FOREIGN KEY (parent_team_id) REFERENCES teams(id);
ALTER TABLE team_staff ADD CONSTRAINT fk_team_staff_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE team_staff ADD CONSTRAINT fk_team_staff_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE team_staff ADD CONSTRAINT fk_team_staff_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE game_officials ADD CONSTRAINT fk_game_officials_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE game_officials ADD CONSTRAINT fk_game_officials_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE game_captains ADD CONSTRAINT fk_game_captains_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE game_captains ADD CONSTRAINT fk_game_captains_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE game_captains ADD CONSTRAINT fk_game_captains_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE players ADD CONSTRAINT fk_players_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE player_profiles ADD CONSTRAINT fk_player_profiles_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE rosters ADD CONSTRAINT fk_rosters_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE rosters ADD CONSTRAINT fk_rosters_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE rosters ADD CONSTRAINT fk_rosters_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE lineups ADD CONSTRAINT fk_lineups_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE lineups ADD CONSTRAINT fk_lineups_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE lineups ADD CONSTRAINT fk_lineups_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE loan_players ADD CONSTRAINT fk_loan_players_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE loan_players ADD CONSTRAINT fk_loan_players_from_team_id_teams FOREIGN KEY (from_team_id) REFERENCES teams(id);
ALTER TABLE loan_players ADD CONSTRAINT fk_loan_players_to_team_id_teams FOREIGN KEY (to_team_id) REFERENCES teams(id);
ALTER TABLE personal_equipment ADD CONSTRAINT fk_personal_equipment_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE personal_equipment ADD CONSTRAINT fk_personal_equipment_brand_id_brands FOREIGN KEY (brand_id) REFERENCES brands(id);
ALTER TABLE venues ADD CONSTRAINT fk_venues_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE games ADD CONSTRAINT fk_games_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE games ADD CONSTRAINT fk_games_division_id_divisions FOREIGN KEY (division_id) REFERENCES divisions(id);
ALTER TABLE games ADD CONSTRAINT fk_games_home_team_id_teams FOREIGN KEY (home_team_id) REFERENCES teams(id);
ALTER TABLE games ADD CONSTRAINT fk_games_away_team_id_teams FOREIGN KEY (away_team_id) REFERENCES teams(id);
ALTER TABLE games ADD CONSTRAINT fk_games_venue_id_venues FOREIGN KEY (venue_id) REFERENCES venues(id);
ALTER TABLE game_approvals ADD CONSTRAINT fk_game_approvals_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE game_approvals ADD CONSTRAINT fk_game_approvals_approved_by_users FOREIGN KEY (approved_by) REFERENCES users(id);
ALTER TABLE game_events ADD CONSTRAINT fk_game_events_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE game_events ADD CONSTRAINT fk_game_events_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE game_events ADD CONSTRAINT fk_game_events_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE game_events ADD CONSTRAINT fk_game_events_assist_player_id_players FOREIGN KEY (assist_player_id) REFERENCES players(id);
ALTER TABLE game_events ADD CONSTRAINT fk_game_events_second_assist_player_id_players FOREIGN KEY (second_assist_player_id) REFERENCES players(id);
ALTER TABLE standings ADD CONSTRAINT fk_standings_division_id_divisions FOREIGN KEY (division_id) REFERENCES divisions(id);
ALTER TABLE standings ADD CONSTRAINT fk_standings_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE player_statistics ADD CONSTRAINT fk_player_statistics_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE player_statistics ADD CONSTRAINT fk_player_statistics_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE player_statistics ADD CONSTRAINT fk_player_statistics_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE team_statistics ADD CONSTRAINT fk_team_statistics_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE team_statistics ADD CONSTRAINT fk_team_statistics_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE achievements ADD CONSTRAINT fk_achievements_verified_by_persons FOREIGN KEY (verified_by) REFERENCES persons(id);
ALTER TABLE player_achievements ADD CONSTRAINT fk_player_achievements_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE player_achievements ADD CONSTRAINT fk_player_achievements_achievement_id_achievements FOREIGN KEY (achievement_id) REFERENCES achievements(id);
ALTER TABLE player_achievements ADD CONSTRAINT fk_player_achievements_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE milestones ADD CONSTRAINT fk_milestones_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE milestones ADD CONSTRAINT fk_milestones_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE waivers ADD CONSTRAINT fk_waivers_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE waivers ADD CONSTRAINT fk_waivers_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE waivers ADD CONSTRAINT fk_waivers_requesting_team_id_teams FOREIGN KEY (requesting_team_id) REFERENCES teams(id);
ALTER TABLE waivers ADD CONSTRAINT fk_waivers_current_team_id_teams FOREIGN KEY (current_team_id) REFERENCES teams(id);
ALTER TABLE waivers ADD CONSTRAINT fk_waivers_processed_by_persons FOREIGN KEY (processed_by) REFERENCES persons(id);
ALTER TABLE suspensions ADD CONSTRAINT fk_suspensions_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE suspensions ADD CONSTRAINT fk_suspensions_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE suspensions ADD CONSTRAINT fk_suspensions_issued_by_persons FOREIGN KEY (issued_by) REFERENCES persons(id);
ALTER TABLE transfers ADD CONSTRAINT fk_transfers_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE transfers ADD CONSTRAINT fk_transfers_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE transfers ADD CONSTRAINT fk_transfers_from_team_id_teams FOREIGN KEY (from_team_id) REFERENCES teams(id);
ALTER TABLE transfers ADD CONSTRAINT fk_transfers_to_team_id_teams FOREIGN KEY (to_team_id) REFERENCES teams(id);
ALTER TABLE transfers ADD CONSTRAINT fk_transfers_approved_by_persons FOREIGN KEY (approved_by) REFERENCES persons(id);
ALTER TABLE player_draft ADD CONSTRAINT fk_player_draft_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE player_draft ADD CONSTRAINT fk_player_draft_division_id_divisions FOREIGN KEY (division_id) REFERENCES divisions(id);
ALTER TABLE player_draft ADD CONSTRAINT fk_player_draft_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE player_draft ADD CONSTRAINT fk_player_draft_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE expenses ADD CONSTRAINT fk_expenses_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE expenses ADD CONSTRAINT fk_expenses_recorded_by_users FOREIGN KEY (recorded_by) REFERENCES users(id);
ALTER TABLE playoff_brackets ADD CONSTRAINT fk_playoff_brackets_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE playoff_brackets ADD CONSTRAINT fk_playoff_brackets_division_id_divisions FOREIGN KEY (division_id) REFERENCES divisions(id);
ALTER TABLE playoff_brackets ADD CONSTRAINT fk_playoff_brackets_home_team_id_teams FOREIGN KEY (home_team_id) REFERENCES teams(id);
ALTER TABLE playoff_brackets ADD CONSTRAINT fk_playoff_brackets_away_team_id_teams FOREIGN KEY (away_team_id) REFERENCES teams(id);
ALTER TABLE playoff_brackets ADD CONSTRAINT fk_playoff_brackets_winner_team_id_teams FOREIGN KEY (winner_team_id) REFERENCES teams(id);
ALTER TABLE playoff_seedings ADD CONSTRAINT fk_playoff_seedings_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE playoff_seedings ADD CONSTRAINT fk_playoff_seedings_division_id_divisions FOREIGN KEY (division_id) REFERENCES divisions(id);
ALTER TABLE playoff_seedings ADD CONSTRAINT fk_playoff_seedings_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE events ADD CONSTRAINT fk_events_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE events ADD CONSTRAINT fk_events_venue_id_venues FOREIGN KEY (venue_id) REFERENCES venues(id);
ALTER TABLE event_rsvps ADD CONSTRAINT fk_event_rsvps_event_id_events FOREIGN KEY (event_id) REFERENCES events(id);
ALTER TABLE event_rsvps ADD CONSTRAINT fk_event_rsvps_user_id_users FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE messages ADD CONSTRAINT fk_messages_sender_id_users FOREIGN KEY (sender_id) REFERENCES users(id);
ALTER TABLE messages ADD CONSTRAINT fk_messages_recipient_id_users FOREIGN KEY (recipient_id) REFERENCES users(id);
ALTER TABLE documents ADD CONSTRAINT fk_documents_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE documents ADD CONSTRAINT fk_documents_uploaded_by_users FOREIGN KEY (uploaded_by) REFERENCES users(id);
ALTER TABLE documents ADD CONSTRAINT fk_documents_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE documents ADD CONSTRAINT fk_documents_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE documents ADD CONSTRAINT fk_documents_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE google_sheets_settings ADD CONSTRAINT fk_google_sheets_settings_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE google_apps_script_settings ADD CONSTRAINT fk_google_apps_script_settings_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE shopify_settings ADD CONSTRAINT fk_shopify_settings_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE system_settings ADD CONSTRAINT fk_system_settings_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE definitions ADD CONSTRAINT fk_definitions_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE game_attendance ADD CONSTRAINT fk_game_attendance_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE game_attendance ADD CONSTRAINT fk_game_attendance_recorded_by_users FOREIGN KEY (recorded_by) REFERENCES users(id);
ALTER TABLE game_periods ADD CONSTRAINT fk_game_periods_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE game_periods ADD CONSTRAINT fk_game_periods_official_player_id_players FOREIGN KEY (official_player_id) REFERENCES players(id);
ALTER TABLE penalty_box_events ADD CONSTRAINT fk_penalty_box_events_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE penalty_box_events ADD CONSTRAINT fk_penalty_box_events_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE penalty_box_events ADD CONSTRAINT fk_penalty_box_events_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE penalty_box_events ADD CONSTRAINT fk_penalty_box_events_penalty_event_id_game_events FOREIGN KEY (penalty_event_id) REFERENCES game_events(id);
ALTER TABLE team_versus_team_records ADD CONSTRAINT fk_team_versus_team_records_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE team_versus_team_records ADD CONSTRAINT fk_team_versus_team_records_team_a_id_teams FOREIGN KEY (team_a_id) REFERENCES teams(id);
ALTER TABLE team_versus_team_records ADD CONSTRAINT fk_team_versus_team_records_team_b_id_teams FOREIGN KEY (team_b_id) REFERENCES teams(id);
ALTER TABLE goalie_statistics ADD CONSTRAINT fk_goalie_statistics_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE goalie_statistics ADD CONSTRAINT fk_goalie_statistics_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE goalie_statistics ADD CONSTRAINT fk_goalie_statistics_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE groups ADD CONSTRAINT fk_groups_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE groups ADD CONSTRAINT fk_groups_parent_group_id_groups FOREIGN KEY (parent_group_id) REFERENCES groups(id);
ALTER TABLE group_members ADD CONSTRAINT fk_group_members_group_id_groups FOREIGN KEY (group_id) REFERENCES groups(id);
ALTER TABLE practice_sessions ADD CONSTRAINT fk_practice_sessions_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE practice_sessions ADD CONSTRAINT fk_practice_sessions_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE practice_sessions ADD CONSTRAINT fk_practice_sessions_venue_id_venues FOREIGN KEY (venue_id) REFERENCES venues(id);
ALTER TABLE practice_attendance ADD CONSTRAINT fk_practice_attendance_practice_id_practice_sessions FOREIGN KEY (practice_id) REFERENCES practice_sessions(id);
ALTER TABLE practice_attendance ADD CONSTRAINT fk_practice_attendance_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE player_availability ADD CONSTRAINT fk_player_availability_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE player_availability ADD CONSTRAINT fk_player_availability_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE official_assignments ADD CONSTRAINT fk_official_assignments_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE official_assignments ADD CONSTRAINT fk_official_assignments_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE official_assignments ADD CONSTRAINT fk_official_assignments_official_player_id_players FOREIGN KEY (official_player_id) REFERENCES players(id);
ALTER TABLE official_assignments ADD CONSTRAINT fk_official_assignments_official_team_id_teams FOREIGN KEY (official_team_id) REFERENCES teams(id);
ALTER TABLE game_scheduling_conflicts ADD CONSTRAINT fk_game_scheduling_conflicts_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE game_scheduling_conflicts ADD CONSTRAINT fk_game_scheduling_conflicts_resolved_by_users FOREIGN KEY (resolved_by) REFERENCES users(id);
ALTER TABLE appeals ADD CONSTRAINT fk_appeals_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE appeals ADD CONSTRAINT fk_appeals_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE appeals ADD CONSTRAINT fk_appeals_filed_by_persons FOREIGN KEY (filed_by) REFERENCES persons(id);
ALTER TABLE appeals ADD CONSTRAINT fk_appeals_decided_by_persons FOREIGN KEY (decided_by) REFERENCES persons(id);
ALTER TABLE appeal_workflow_steps ADD CONSTRAINT fk_appeal_workflow_steps_appeal_id_appeals FOREIGN KEY (appeal_id) REFERENCES appeals(id);
ALTER TABLE appeal_workflow_steps ADD CONSTRAINT fk_appeal_workflow_steps_actor_id_persons FOREIGN KEY (actor_id) REFERENCES persons(id);
ALTER TABLE coaching_notes ADD CONSTRAINT fk_coaching_notes_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE coaching_notes ADD CONSTRAINT fk_coaching_notes_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE coaching_notes ADD CONSTRAINT fk_coaching_notes_coach_id_persons FOREIGN KEY (coach_id) REFERENCES persons(id);
ALTER TABLE playbooks ADD CONSTRAINT fk_playbooks_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE playbooks ADD CONSTRAINT fk_playbooks_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE playbooks ADD CONSTRAINT fk_playbooks_created_by_persons FOREIGN KEY (created_by) REFERENCES persons(id);
ALTER TABLE playbook_diagrams ADD CONSTRAINT fk_playbook_diagrams_playbook_id_playbooks FOREIGN KEY (playbook_id) REFERENCES playbooks(id);
ALTER TABLE team_advanced_stats ADD CONSTRAINT fk_team_advanced_stats_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE team_advanced_stats ADD CONSTRAINT fk_team_advanced_stats_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE player_development_plans ADD CONSTRAINT fk_player_development_plans_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE player_development_plans ADD CONSTRAINT fk_player_development_plans_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE player_development_plans ADD CONSTRAINT fk_player_development_plans_coach_id_persons FOREIGN KEY (coach_id) REFERENCES persons(id);
ALTER TABLE development_milestones ADD CONSTRAINT fk_development_milestones_plan_id_player_development_plans FOREIGN KEY (plan_id) REFERENCES player_development_plans(id);
ALTER TABLE player_contracts ADD CONSTRAINT fk_player_contracts_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE player_contracts ADD CONSTRAINT fk_player_contracts_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE player_contracts ADD CONSTRAINT fk_player_contracts_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE contract_terms ADD CONSTRAINT fk_contract_terms_contract_id_player_contracts FOREIGN KEY (contract_id) REFERENCES player_contracts(id);
ALTER TABLE league_bylaws ADD CONSTRAINT fk_league_bylaws_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE league_bylaws ADD CONSTRAINT fk_league_bylaws_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE league_bylaws ADD CONSTRAINT fk_league_bylaws_created_by_persons FOREIGN KEY (created_by) REFERENCES persons(id);
ALTER TABLE rule_enforcement_log ADD CONSTRAINT fk_rule_enforcement_log_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE rule_enforcement_log ADD CONSTRAINT fk_rule_enforcement_log_bylaw_id_league_bylaws FOREIGN KEY (bylaw_id) REFERENCES league_bylaws(id);
ALTER TABLE rule_enforcement_log ADD CONSTRAINT fk_rule_enforcement_log_enforced_by_persons FOREIGN KEY (enforced_by) REFERENCES persons(id);
ALTER TABLE salary_cap_rules ADD CONSTRAINT fk_salary_cap_rules_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE salary_cap_rules ADD CONSTRAINT fk_salary_cap_rules_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE salary_cap_tracking ADD CONSTRAINT fk_salary_cap_tracking_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE salary_cap_tracking ADD CONSTRAINT fk_salary_cap_tracking_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE player_movement_log ADD CONSTRAINT fk_player_movement_log_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE player_movement_log ADD CONSTRAINT fk_player_movement_log_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE player_movement_log ADD CONSTRAINT fk_player_movement_log_from_team_id_teams FOREIGN KEY (from_team_id) REFERENCES teams(id);
ALTER TABLE player_movement_log ADD CONSTRAINT fk_player_movement_log_to_team_id_teams FOREIGN KEY (to_team_id) REFERENCES teams(id);
ALTER TABLE player_movement_log ADD CONSTRAINT fk_player_movement_log_documented_by_persons FOREIGN KEY (documented_by) REFERENCES persons(id);
ALTER TABLE incident_reports ADD CONSTRAINT fk_incident_reports_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE incident_reports ADD CONSTRAINT fk_incident_reports_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE incident_reports ADD CONSTRAINT fk_incident_reports_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE incident_reports ADD CONSTRAINT fk_incident_reports_reported_by_persons FOREIGN KEY (reported_by) REFERENCES persons(id);
ALTER TABLE incident_reports ADD CONSTRAINT fk_incident_reports_involved_player_id_players FOREIGN KEY (involved_player_id) REFERENCES players(id);
ALTER TABLE incident_reports ADD CONSTRAINT fk_incident_reports_involved_official_id_persons FOREIGN KEY (involved_official_id) REFERENCES persons(id);
ALTER TABLE incident_investigation ADD CONSTRAINT fk_incident_investigation_incident_id_incident_reports FOREIGN KEY (incident_id) REFERENCES incident_reports(id);
ALTER TABLE incident_investigation ADD CONSTRAINT fk_incident_investigation_investigator_id_persons FOREIGN KEY (investigator_id) REFERENCES persons(id);
ALTER TABLE ticket_inventory ADD CONSTRAINT fk_ticket_inventory_venue_id_venues FOREIGN KEY (venue_id) REFERENCES venues(id);
ALTER TABLE ticket_sales ADD CONSTRAINT fk_ticket_sales_game_id_games FOREIGN KEY (game_id) REFERENCES games(id);
ALTER TABLE ticket_sales ADD CONSTRAINT fk_ticket_sales_ticket_id_ticket_inventory FOREIGN KEY (ticket_id) REFERENCES ticket_inventory(id);
ALTER TABLE merchandise_products ADD CONSTRAINT fk_merchandise_products_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE merchandise_products ADD CONSTRAINT fk_merchandise_products_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE merchandise_orders ADD CONSTRAINT fk_merchandise_orders_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE merchandise_orders ADD CONSTRAINT fk_merchandise_orders_buyer_id_persons FOREIGN KEY (buyer_id) REFERENCES persons(id);
ALTER TABLE merchandise_order_items ADD CONSTRAINT fk_merchandise_order_items_order_id_merchandise_orders FOREIGN KEY (order_id) REFERENCES merchandise_orders(id);
ALTER TABLE merchandise_order_items ADD CONSTRAINT fk_merchandise_order_items_product_id_merchandise_products FOREIGN KEY (product_id) REFERENCES merchandise_products(id);
ALTER TABLE sponsorship_deliverables ADD CONSTRAINT fk_sponsorship_deliverables_sponsor_id_sponsors FOREIGN KEY (sponsor_id) REFERENCES sponsors(id);
ALTER TABLE sponsorship_payments ADD CONSTRAINT fk_sponsorship_payments_sponsor_id_sponsors FOREIGN KEY (sponsor_id) REFERENCES sponsors(id);
ALTER TABLE sponsorship_payments ADD CONSTRAINT fk_sponsorship_payments_recorded_by_users FOREIGN KEY (recorded_by) REFERENCES users(id);
ALTER TABLE announcements ADD CONSTRAINT fk_announcements_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE announcements ADD CONSTRAINT fk_announcements_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE announcements ADD CONSTRAINT fk_announcements_published_by_users FOREIGN KEY (published_by) REFERENCES users(id);
ALTER TABLE announcement_audience ADD CONSTRAINT fk_announcement_audience_announcement_id_announcements FOREIGN KEY (announcement_id) REFERENCES announcements(id);
ALTER TABLE fan_profiles ADD CONSTRAINT fk_fan_profiles_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE fan_profiles ADD CONSTRAINT fk_fan_profiles_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE fan_profiles ADD CONSTRAINT fk_fan_profiles_favorite_team_id_teams FOREIGN KEY (favorite_team_id) REFERENCES teams(id);
ALTER TABLE social_media_accounts ADD CONSTRAINT fk_social_media_accounts_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE social_media_posts ADD CONSTRAINT fk_social_media_posts_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE social_media_posts ADD CONSTRAINT fk_social_media_posts_account_id_social_media_accounts FOREIGN KEY (account_id) REFERENCES social_media_accounts(id);
ALTER TABLE social_media_posts ADD CONSTRAINT fk_social_media_posts_created_by_users FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE tournaments ADD CONSTRAINT fk_tournaments_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE tournaments ADD CONSTRAINT fk_tournaments_venue_id_venues FOREIGN KEY (venue_id) REFERENCES venues(id);
ALTER TABLE tournaments ADD CONSTRAINT fk_tournaments_created_by_persons FOREIGN KEY (created_by) REFERENCES persons(id);
ALTER TABLE tournament_teams ADD CONSTRAINT fk_tournament_teams_tournament_id_tournaments FOREIGN KEY (tournament_id) REFERENCES tournaments(id);
ALTER TABLE tournament_teams ADD CONSTRAINT fk_tournament_teams_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE tournament_brackets ADD CONSTRAINT fk_tournament_brackets_tournament_id_tournaments FOREIGN KEY (tournament_id) REFERENCES tournaments(id);
ALTER TABLE tournament_brackets ADD CONSTRAINT fk_tournament_brackets_home_team_id_teams FOREIGN KEY (home_team_id) REFERENCES teams(id);
ALTER TABLE tournament_brackets ADD CONSTRAINT fk_tournament_brackets_away_team_id_teams FOREIGN KEY (away_team_id) REFERENCES teams(id);
ALTER TABLE tournament_brackets ADD CONSTRAINT fk_tournament_brackets_winner_team_id_teams FOREIGN KEY (winner_team_id) REFERENCES teams(id);
ALTER TABLE season_archives ADD CONSTRAINT fk_season_archives_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE season_archives ADD CONSTRAINT fk_season_archives_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE season_archives ADD CONSTRAINT fk_season_archives_champion_team_id_teams FOREIGN KEY (champion_team_id) REFERENCES teams(id);
ALTER TABLE season_archives ADD CONSTRAINT fk_season_archives_created_by_users FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE dashboard_widgets ADD CONSTRAINT fk_dashboard_widgets_user_id_users FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE season_current ADD CONSTRAINT fk_season_current_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE season_current ADD CONSTRAINT fk_season_current_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE membership_lookup ADD CONSTRAINT fk_membership_lookup_membership_id_memberships FOREIGN KEY (membership_id) REFERENCES memberships(id);
ALTER TABLE membership_lookup ADD CONSTRAINT fk_membership_lookup_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE membership_lookup ADD CONSTRAINT fk_membership_lookup_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE team_season_rosters ADD CONSTRAINT fk_team_season_rosters_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE team_season_rosters ADD CONSTRAINT fk_team_season_rosters_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE division_team_lookup ADD CONSTRAINT fk_division_team_lookup_division_id_divisions FOREIGN KEY (division_id) REFERENCES divisions(id);
ALTER TABLE division_team_lookup ADD CONSTRAINT fk_division_team_lookup_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE player_lookup ADD CONSTRAINT fk_player_lookup_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE player_lookup ADD CONSTRAINT fk_player_lookup_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id);
ALTER TABLE player_lookup ADD CONSTRAINT fk_player_lookup_current_team_id_teams FOREIGN KEY (current_team_id) REFERENCES teams(id);
ALTER TABLE player_contract_history ADD CONSTRAINT fk_player_contract_history_player_id_players FOREIGN KEY (player_id) REFERENCES players(id);
ALTER TABLE player_contract_history ADD CONSTRAINT fk_player_contract_history_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE player_contract_history ADD CONSTRAINT fk_player_contract_history_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE event_status_log ADD CONSTRAINT fk_event_status_log_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE event_status_log ADD CONSTRAINT fk_event_status_log_changed_by_users FOREIGN KEY (changed_by) REFERENCES users(id);
ALTER TABLE team_season_stats_cache ADD CONSTRAINT fk_team_season_stats_cache_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id);
ALTER TABLE team_season_stats_cache ADD CONSTRAINT fk_team_season_stats_cache_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id);
ALTER TABLE bulk_import_staging ADD CONSTRAINT fk_bulk_import_staging_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id);
ALTER TABLE bulk_import_staging ADD CONSTRAINT fk_bulk_import_staging_imported_by_users FOREIGN KEY (imported_by) REFERENCES users(id);
ALTER TABLE persons ADD CONSTRAINT fk_persons_user_id_users FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE user_preferences ADD CONSTRAINT fk_user_preferences_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE role_permissions ADD CONSTRAINT fk_role_permissions_role_id_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE;
ALTER TABLE user_roles ADD CONSTRAINT fk_user_roles_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE user_roles ADD CONSTRAINT fk_user_roles_role_id_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE;
ALTER TABLE organizations ADD CONSTRAINT fk_organizations_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id);
ALTER TABLE clubs ADD CONSTRAINT fk_clubs_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE conferences ADD CONSTRAINT fk_conferences_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE divisions ADD CONSTRAINT fk_divisions_conference_id_conferences FOREIGN KEY (conference_id) REFERENCES conferences(id) ON DELETE SET NULL;
ALTER TABLE divisions ADD CONSTRAINT fk_divisions_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE org_seasons ADD CONSTRAINT fk_org_seasons_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE org_seasons ADD CONSTRAINT fk_org_seasons_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE season_phases ADD CONSTRAINT fk_season_phases_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE teams ADD CONSTRAINT fk_teams_club_id_clubs FOREIGN KEY (club_id) REFERENCES clubs(id) ON DELETE CASCADE;
ALTER TABLE teams ADD CONSTRAINT fk_teams_conference_id_conferences FOREIGN KEY (conference_id) REFERENCES conferences(id) ON DELETE SET NULL;
ALTER TABLE team_managers ADD CONSTRAINT fk_team_managers_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE team_managers ADD CONSTRAINT fk_team_managers_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE players ADD CONSTRAINT fk_players_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE roster_players ADD CONSTRAINT fk_roster_players_roster_id_rosters FOREIGN KEY (roster_id) REFERENCES rosters(id) ON DELETE CASCADE;
ALTER TABLE roster_players ADD CONSTRAINT fk_roster_players_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE lineups ADD CONSTRAINT fk_lineups_roster_id_rosters FOREIGN KEY (roster_id) REFERENCES rosters(id) ON DELETE SET NULL;
ALTER TABLE lineup_players ADD CONSTRAINT fk_lineup_players_lineup_id_lineups FOREIGN KEY (lineup_id) REFERENCES lineups(id) ON DELETE CASCADE;
ALTER TABLE lineup_players ADD CONSTRAINT fk_lineup_players_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE competitions ADD CONSTRAINT fk_competitions_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE competitions ADD CONSTRAINT fk_competitions_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE SET NULL;
ALTER TABLE competition_teams ADD CONSTRAINT fk_competition_teams_competition_id_competitions FOREIGN KEY (competition_id) REFERENCES competitions(id) ON DELETE CASCADE;
ALTER TABLE competition_teams ADD CONSTRAINT fk_competition_teams_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE brackets ADD CONSTRAINT fk_brackets_competition_id_competitions FOREIGN KEY (competition_id) REFERENCES competitions(id) ON DELETE CASCADE;
ALTER TABLE playoff_rounds ADD CONSTRAINT fk_playoff_rounds_competition_id_competitions FOREIGN KEY (competition_id) REFERENCES competitions(id) ON DELETE CASCADE;
ALTER TABLE playoff_rounds ADD CONSTRAINT fk_playoff_rounds_bracket_id_brackets FOREIGN KEY (bracket_id) REFERENCES brackets(id) ON DELETE SET NULL;
ALTER TABLE playoff_rounds ADD CONSTRAINT fk_playoff_rounds_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE SET NULL;
ALTER TABLE playoff_series ADD CONSTRAINT fk_playoff_series_playoff_round_id_playoff_rounds FOREIGN KEY (playoff_round_id) REFERENCES playoff_rounds(id) ON DELETE CASCADE;
ALTER TABLE playoff_series ADD CONSTRAINT fk_playoff_series_team_a_id_teams FOREIGN KEY (team_a_id) REFERENCES teams(id);
ALTER TABLE playoff_series ADD CONSTRAINT fk_playoff_series_team_b_id_teams FOREIGN KEY (team_b_id) REFERENCES teams(id);
ALTER TABLE playoff_series ADD CONSTRAINT fk_playoff_series_winner_team_id_teams FOREIGN KEY (winner_team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE playoff_series_games ADD CONSTRAINT fk_playoff_series_games_playoff_series_id_playoff_series FOREIGN KEY (playoff_series_id) REFERENCES playoff_series(id) ON DELETE CASCADE;
ALTER TABLE playoff_series_games ADD CONSTRAINT fk_playoff_series_games_game_id_games FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE;
ALTER TABLE bracket_teams ADD CONSTRAINT fk_bracket_teams_bracket_id_brackets FOREIGN KEY (bracket_id) REFERENCES brackets(id) ON DELETE CASCADE;
ALTER TABLE bracket_teams ADD CONSTRAINT fk_bracket_teams_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE bracket_matches ADD CONSTRAINT fk_bracket_matches_bracket_id_brackets FOREIGN KEY (bracket_id) REFERENCES brackets(id) ON DELETE CASCADE;
ALTER TABLE bracket_matches ADD CONSTRAINT fk_bracket_matches_team_a_id_teams FOREIGN KEY (team_a_id) REFERENCES teams(id);
ALTER TABLE bracket_matches ADD CONSTRAINT fk_bracket_matches_team_b_id_teams FOREIGN KEY (team_b_id) REFERENCES teams(id);
ALTER TABLE bracket_matches ADD CONSTRAINT fk_bracket_matches_game_id_games FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE SET NULL;
ALTER TABLE bracket_matches ADD CONSTRAINT fk_bracket_matches_winner_team_id_teams FOREIGN KEY (winner_team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE ice_time_bookings ADD CONSTRAINT fk_ice_time_bookings_venue_id_venues FOREIGN KEY (venue_id) REFERENCES venues(id) ON DELETE CASCADE;
ALTER TABLE ice_time_bookings ADD CONSTRAINT fk_ice_time_bookings_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE SET NULL;
ALTER TABLE ice_time_bookings ADD CONSTRAINT fk_ice_time_bookings_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE ice_time_bookings ADD CONSTRAINT fk_ice_time_bookings_booker_user_id_users FOREIGN KEY (booker_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE ice_time_availability ADD CONSTRAINT fk_ice_time_availability_venue_id_venues FOREIGN KEY (venue_id) REFERENCES venues(id) ON DELETE CASCADE;
ALTER TABLE games ADD CONSTRAINT fk_games_competition_id_competitions FOREIGN KEY (competition_id) REFERENCES competitions(id) ON DELETE SET NULL;
ALTER TABLE game_events ADD CONSTRAINT fk_game_events_assisting_player_id_players FOREIGN KEY (assisting_player_id) REFERENCES players(id) ON DELETE SET NULL;
ALTER TABLE game_events ADD CONSTRAINT fk_game_events_secondary_assist_player_id_players FOREIGN KEY (secondary_assist_player_id) REFERENCES players(id) ON DELETE SET NULL;
ALTER TABLE game_events ADD CONSTRAINT fk_game_events_opposing_team_id_teams FOREIGN KEY (opposing_team_id) REFERENCES teams(id);
ALTER TABLE game_events ADD CONSTRAINT fk_game_events_serving_player_id_players FOREIGN KEY (serving_player_id) REFERENCES players(id) ON DELETE SET NULL;
ALTER TABLE team_standings ADD CONSTRAINT fk_team_standings_division_id_divisions FOREIGN KEY (division_id) REFERENCES divisions(id) ON DELETE SET NULL;
ALTER TABLE team_standings ADD CONSTRAINT fk_team_standings_conference_id_conferences FOREIGN KEY (conference_id) REFERENCES conferences(id) ON DELETE SET NULL;
ALTER TABLE team_standings ADD CONSTRAINT fk_team_standings_competition_id_competitions FOREIGN KEY (competition_id) REFERENCES competitions(id) ON DELETE SET NULL;
ALTER TABLE team_standings ADD CONSTRAINT fk_team_standings_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE team_standings ADD CONSTRAINT fk_team_standings_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE team_goals ADD CONSTRAINT fk_team_goals_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE team_goals ADD CONSTRAINT fk_team_goals_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE team_goals ADD CONSTRAINT fk_team_goals_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE team_kpis ADD CONSTRAINT fk_team_kpis_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE team_kpis ADD CONSTRAINT fk_team_kpis_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE team_kpi_history ADD CONSTRAINT fk_team_kpi_history_team_kpi_id_team_kpis FOREIGN KEY (team_kpi_id) REFERENCES team_kpis(id) ON DELETE CASCADE;
ALTER TABLE season_objectives ADD CONSTRAINT fk_season_objectives_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE season_objectives ADD CONSTRAINT fk_season_objectives_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE season_objectives ADD CONSTRAINT fk_season_objectives_owner_user_id_users FOREIGN KEY (owner_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE player_drafts ADD CONSTRAINT fk_player_drafts_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE player_drafts ADD CONSTRAINT fk_player_drafts_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE player_drafts ADD CONSTRAINT fk_player_drafts_competition_id_competitions FOREIGN KEY (competition_id) REFERENCES competitions(id) ON DELETE SET NULL;
ALTER TABLE draft_teams ADD CONSTRAINT fk_draft_teams_draft_id_player_drafts FOREIGN KEY (draft_id) REFERENCES player_drafts(id) ON DELETE CASCADE;
ALTER TABLE draft_teams ADD CONSTRAINT fk_draft_teams_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE draft_picks ADD CONSTRAINT fk_draft_picks_draft_id_player_drafts FOREIGN KEY (draft_id) REFERENCES player_drafts(id) ON DELETE CASCADE;
ALTER TABLE draft_picks ADD CONSTRAINT fk_draft_picks_draft_team_id_draft_teams FOREIGN KEY (draft_team_id) REFERENCES draft_teams(id) ON DELETE CASCADE;
ALTER TABLE draft_picks ADD CONSTRAINT fk_draft_picks_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE draft_picks ADD CONSTRAINT fk_draft_picks_trading_team_id_teams FOREIGN KEY (trading_team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE events ADD CONSTRAINT fk_events_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE events ADD CONSTRAINT fk_events_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE scorekeeper_default_settings ADD CONSTRAINT fk_scorekeeper_default_settings_organization_id_organization FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE scorekeeper_game_settings ADD CONSTRAINT fk_scorekeeper_game_settings_game_id_games FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE;
ALTER TABLE scorekeeper_game_settings ADD CONSTRAINT fk_scorekeeper_game_settings_scorekeeper_user_id_users FOREIGN KEY (scorekeeper_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE scorekeeper_sessions ADD CONSTRAINT fk_scorekeeper_sessions_game_id_games FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE;
ALTER TABLE scorekeeper_sessions ADD CONSTRAINT fk_scorekeeper_sessions_scorekeeper_user_id_users FOREIGN KEY (scorekeeper_user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE player_injuries ADD CONSTRAINT fk_player_injuries_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE player_injuries ADD CONSTRAINT fk_player_injuries_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE player_injuries ADD CONSTRAINT fk_player_injuries_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE player_transfers ADD CONSTRAINT fk_player_transfers_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE player_transfers ADD CONSTRAINT fk_player_transfers_from_team_id_teams FOREIGN KEY (from_team_id) REFERENCES teams(id);
ALTER TABLE player_transfers ADD CONSTRAINT fk_player_transfers_to_team_id_teams FOREIGN KEY (to_team_id) REFERENCES teams(id);
ALTER TABLE player_transfers ADD CONSTRAINT fk_player_transfers_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE player_transfers ADD CONSTRAINT fk_player_transfers_approved_by_user_id_users FOREIGN KEY (approved_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE player_discipline ADD CONSTRAINT fk_player_discipline_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE player_discipline ADD CONSTRAINT fk_player_discipline_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE player_discipline ADD CONSTRAINT fk_player_discipline_imposed_by_user_id_users FOREIGN KEY (imposed_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE player_salary ADD CONSTRAINT fk_player_salary_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE player_salary ADD CONSTRAINT fk_player_salary_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE player_salary ADD CONSTRAINT fk_player_salary_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE player_ratings ADD CONSTRAINT fk_player_ratings_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE player_ratings ADD CONSTRAINT fk_player_ratings_rater_user_id_users FOREIGN KEY (rater_user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE equipment ADD CONSTRAINT fk_equipment_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE player_sticks ADD CONSTRAINT fk_player_sticks_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE equipment_assignments ADD CONSTRAINT fk_equipment_assignments_equipment_id_equipment FOREIGN KEY (equipment_id) REFERENCES equipment(id) ON DELETE CASCADE;
ALTER TABLE equipment_assignments ADD CONSTRAINT fk_equipment_assignments_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE equipment_maintenance ADD CONSTRAINT fk_equipment_maintenance_equipment_id_equipment FOREIGN KEY (equipment_id) REFERENCES equipment(id) ON DELETE CASCADE;
ALTER TABLE equipment_maintenance ADD CONSTRAINT fk_equipment_maintenance_performed_by_user_id_users FOREIGN KEY (performed_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE officials ADD CONSTRAINT fk_officials_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE officials ADD CONSTRAINT fk_officials_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id) ON DELETE CASCADE;
ALTER TABLE officials ADD CONSTRAINT fk_officials_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE SET NULL;
ALTER TABLE official_assignments ADD CONSTRAINT fk_official_assignments_game_id_games FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE;
ALTER TABLE official_assignments ADD CONSTRAINT fk_official_assignments_official_id_officials FOREIGN KEY (official_id) REFERENCES officials(id) ON DELETE CASCADE;
ALTER TABLE official_assignments ADD CONSTRAINT fk_official_assignments_assigned_by_user_id_users FOREIGN KEY (assigned_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE official_ratings ADD CONSTRAINT fk_official_ratings_official_id_officials FOREIGN KEY (official_id) REFERENCES officials(id) ON DELETE CASCADE;
ALTER TABLE official_ratings ADD CONSTRAINT fk_official_ratings_game_id_games FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE;
ALTER TABLE official_ratings ADD CONSTRAINT fk_official_ratings_rater_user_id_users FOREIGN KEY (rater_user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE game_attendance ADD CONSTRAINT fk_game_attendance_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE announcements ADD CONSTRAINT fk_announcements_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE announcements ADD CONSTRAINT fk_announcements_published_by_user_id_users FOREIGN KEY (published_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE messages ADD CONSTRAINT fk_messages_sender_user_id_users FOREIGN KEY (sender_user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE messages ADD CONSTRAINT fk_messages_recipient_user_id_users FOREIGN KEY (recipient_user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE messages ADD CONSTRAINT fk_messages_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE messages ADD CONSTRAINT fk_messages_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE SET NULL;
ALTER TABLE messages ADD CONSTRAINT fk_messages_parent_message_id_messages FOREIGN KEY (parent_message_id) REFERENCES messages(id) ON DELETE SET NULL;
ALTER TABLE practice_sessions ADD CONSTRAINT fk_practice_sessions_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE practice_attendance ADD CONSTRAINT fk_practice_attendance_practice_session_id_practice_sessions FOREIGN KEY (practice_session_id) REFERENCES practice_sessions(id) ON DELETE CASCADE;
ALTER TABLE practice_attendance ADD CONSTRAINT fk_practice_attendance_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE invoices ADD CONSTRAINT fk_invoices_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE SET NULL;
ALTER TABLE invoices ADD CONSTRAINT fk_invoices_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE invoices ADD CONSTRAINT fk_invoices_issued_by_user_id_users FOREIGN KEY (issued_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE invoice_items ADD CONSTRAINT fk_invoice_items_invoice_id_invoices FOREIGN KEY (invoice_id) REFERENCES invoices(id) ON DELETE CASCADE;
ALTER TABLE payments ADD CONSTRAINT fk_payments_invoice_id_invoices FOREIGN KEY (invoice_id) REFERENCES invoices(id) ON DELETE CASCADE;
ALTER TABLE payments ADD CONSTRAINT fk_payments_processed_by_user_id_users FOREIGN KEY (processed_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE audit_logs ADD CONSTRAINT fk_audit_logs_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE notification_logs ADD CONSTRAINT fk_notification_logs_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE media ADD CONSTRAINT fk_media_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE SET NULL;
ALTER TABLE media ADD CONSTRAINT fk_media_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE media ADD CONSTRAINT fk_media_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE SET NULL;
ALTER TABLE media ADD CONSTRAINT fk_media_person_id_persons FOREIGN KEY (person_id) REFERENCES persons(id) ON DELETE SET NULL;
ALTER TABLE media ADD CONSTRAINT fk_media_game_id_games FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE SET NULL;
ALTER TABLE media ADD CONSTRAINT fk_media_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE user_timezone ADD CONSTRAINT fk_user_timezone_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE fan_memberships ADD CONSTRAINT fk_fan_memberships_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE fan_memberships ADD CONSTRAINT fk_fan_memberships_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE fan_memberships ADD CONSTRAINT fk_fan_memberships_membership_tier_id_membership_tiers FOREIGN KEY (membership_tier_id) REFERENCES membership_tiers(id) ON DELETE SET NULL;
ALTER TABLE loyalty_points ADD CONSTRAINT fk_loyalty_points_fan_membership_id_fan_memberships FOREIGN KEY (fan_membership_id) REFERENCES fan_memberships(id) ON DELETE CASCADE;
ALTER TABLE season_tickets ADD CONSTRAINT fk_season_tickets_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE season_tickets ADD CONSTRAINT fk_season_tickets_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE season_tickets ADD CONSTRAINT fk_season_tickets_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE season_tickets ADD CONSTRAINT fk_season_tickets_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE fan_clubs ADD CONSTRAINT fk_fan_clubs_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE fan_clubs ADD CONSTRAINT fk_fan_clubs_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE fan_clubs ADD CONSTRAINT fk_fan_clubs_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE fan_club_members ADD CONSTRAINT fk_fan_club_members_fan_club_id_fan_clubs FOREIGN KEY (fan_club_id) REFERENCES fan_clubs(id) ON DELETE CASCADE;
ALTER TABLE fan_club_members ADD CONSTRAINT fk_fan_club_members_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE advertisements ADD CONSTRAINT fk_advertisements_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE advertisements ADD CONSTRAINT fk_advertisements_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE ad_placements ADD CONSTRAINT fk_ad_placements_advertisement_id_advertisements FOREIGN KEY (advertisement_id) REFERENCES advertisements(id) ON DELETE CASCADE;
ALTER TABLE ad_placements ADD CONSTRAINT fk_ad_placements_venue_id_venues FOREIGN KEY (venue_id) REFERENCES venues(id) ON DELETE SET NULL;
ALTER TABLE ad_placements ADD CONSTRAINT fk_ad_placements_team_id_teams FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL;
ALTER TABLE ad_placements ADD CONSTRAINT fk_ad_placements_competition_id_competitions FOREIGN KEY (competition_id) REFERENCES competitions(id) ON DELETE SET NULL;
ALTER TABLE ad_placements ADD CONSTRAINT fk_ad_placements_game_id_games FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE SET NULL;
ALTER TABLE stick_customization_orders ADD CONSTRAINT fk_stick_customization_orders_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE stick_customization_orders ADD CONSTRAINT fk_stick_customization_orders_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE stick_customization_orders ADD CONSTRAINT fk_stick_customization_orders_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE stick_customization_specs ADD CONSTRAINT fk_stick_customization_specs_customization_order_id_stick_cu FOREIGN KEY (customization_order_id) REFERENCES stick_customization_orders(id) ON DELETE CASCADE;
ALTER TABLE stick_customization_specs ADD CONSTRAINT fk_stick_customization_specs_base_product_id_stick_products FOREIGN KEY (base_product_id) REFERENCES stick_products(id) ON DELETE SET NULL;
ALTER TABLE team_rivalries ADD CONSTRAINT fk_team_rivalries_team_a_id_teams FOREIGN KEY (team_a_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE team_rivalries ADD CONSTRAINT fk_team_rivalries_team_b_id_teams FOREIGN KEY (team_b_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE team_rivalries ADD CONSTRAINT fk_team_rivalries_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE rivalry_stats ADD CONSTRAINT fk_rivalry_stats_team_rivalry_id_team_rivalries FOREIGN KEY (team_rivalry_id) REFERENCES team_rivalries(id) ON DELETE CASCADE;
ALTER TABLE rivalry_stats ADD CONSTRAINT fk_rivalry_stats_season_id_seasons FOREIGN KEY (season_id) REFERENCES seasons(id) ON DELETE CASCADE;
ALTER TABLE lineup_units ADD CONSTRAINT fk_lineup_units_lineup_id_lineups FOREIGN KEY (lineup_id) REFERENCES lineups(id) ON DELETE CASCADE;
ALTER TABLE lineup_unit_players ADD CONSTRAINT fk_lineup_unit_players_lineup_unit_id_lineup_units FOREIGN KEY (lineup_unit_id) REFERENCES lineup_units(id) ON DELETE CASCADE;
ALTER TABLE lineup_unit_players ADD CONSTRAINT fk_lineup_unit_players_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE stick_products ADD CONSTRAINT fk_stick_products_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE stick_polls ADD CONSTRAINT fk_stick_polls_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE stick_polls ADD CONSTRAINT fk_stick_polls_stick_product_id_stick_products FOREIGN KEY (stick_product_id) REFERENCES stick_products(id) ON DELETE SET NULL;
ALTER TABLE stick_polls ADD CONSTRAINT fk_stick_polls_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE stick_poll_responses ADD CONSTRAINT fk_stick_poll_responses_stick_poll_id_stick_polls FOREIGN KEY (stick_poll_id) REFERENCES stick_polls(id) ON DELETE CASCADE;
ALTER TABLE stick_poll_responses ADD CONSTRAINT fk_stick_poll_responses_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE stick_feedback ADD CONSTRAINT fk_stick_feedback_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE stick_feedback ADD CONSTRAINT fk_stick_feedback_stick_product_id_stick_products FOREIGN KEY (stick_product_id) REFERENCES stick_products(id) ON DELETE SET NULL;
ALTER TABLE stick_feedback ADD CONSTRAINT fk_stick_feedback_player_stick_id_player_sticks FOREIGN KEY (player_stick_id) REFERENCES player_sticks(id) ON DELETE SET NULL;
ALTER TABLE stick_feedback ADD CONSTRAINT fk_stick_feedback_submitted_by_user_id_users FOREIGN KEY (submitted_by_user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE stick_recommendations ADD CONSTRAINT fk_stick_recommendations_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE stick_recommendations ADD CONSTRAINT fk_stick_recommendations_player_id_players FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE stick_recommendations ADD CONSTRAINT fk_stick_recommendations_recommended_stick_product_id_stick_ FOREIGN KEY (recommended_stick_product_id) REFERENCES stick_products(id);
ALTER TABLE stick_recommendations ADD CONSTRAINT fk_stick_recommendations_recommended_by_user_id_users FOREIGN KEY (recommended_by_user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE first_time_setup ADD CONSTRAINT fk_first_time_setup_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
ALTER TABLE first_time_setup ADD CONSTRAINT fk_first_time_setup_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE shopify_integration ADD CONSTRAINT fk_shopify_integration_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE shopify_product_sync ADD CONSTRAINT fk_shopify_product_sync_shopify_integration_id_shopify_integ FOREIGN KEY (shopify_integration_id) REFERENCES shopify_integration(id) ON DELETE CASCADE;
ALTER TABLE gas_integration ADD CONSTRAINT fk_gas_integration_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE gas_executions ADD CONSTRAINT fk_gas_executions_gas_integration_id_gas_integration FOREIGN KEY (gas_integration_id) REFERENCES gas_integration(id) ON DELETE CASCADE;
ALTER TABLE google_sheets_config ADD CONSTRAINT fk_google_sheets_config_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE google_sheets_sync_log ADD CONSTRAINT fk_google_sheets_sync_log_google_sheets_config_id_google_she FOREIGN KEY (google_sheets_config_id) REFERENCES google_sheets_config(id) ON DELETE CASCADE;
ALTER TABLE archived_records ADD CONSTRAINT fk_archived_records_archived_by_user_id_users FOREIGN KEY (archived_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE jobs ADD CONSTRAINT fk_jobs_created_by_user_id_users FOREIGN KEY (created_by_user_id) REFERENCES users(id) ON DELETE SET NULL;
ALTER TABLE template_entity ADD CONSTRAINT fk_template_entity_parent_id_organizations FOREIGN KEY (parent_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE template_link ADD CONSTRAINT fk_template_link_entity_a_id_teams FOREIGN KEY (entity_a_id) REFERENCES teams(id) ON DELETE CASCADE;
ALTER TABLE template_link ADD CONSTRAINT fk_template_link_entity_b_id_players FOREIGN KEY (entity_b_id) REFERENCES players(id) ON DELETE CASCADE;
ALTER TABLE template_settings ADD CONSTRAINT fk_template_settings_organization_id_organizations FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
ALTER TABLE template_log ADD CONSTRAINT fk_template_log_user_id_users FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- ==========================================
-- ROW LEVEL SECURITY
-- ==========================================

ALTER TABLE persons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON persons FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON roles FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON users FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE membership_tiers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON membership_tiers FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE membership_benefits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON membership_benefits FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON memberships FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE membership_fees ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON membership_fees FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE membership_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON membership_history FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE member_status_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON member_status_log FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON user_profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON organizations FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON brands FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE retailers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON retailers FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON sponsors FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE leagues ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON leagues FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE seasons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON seasons FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE divisions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON divisions FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON teams FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE farm_teams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON farm_teams FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_staff ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_staff FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE game_officials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON game_officials FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE game_captains ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON game_captains FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE players ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON players FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE rosters ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON rosters FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE lineups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON lineups FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE loan_players ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON loan_players FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE personal_equipment ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON personal_equipment FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON venues FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON games FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE game_approvals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON game_approvals FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE game_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON game_events FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE standings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON standings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_statistics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_statistics FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_statistics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_statistics FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON achievements FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_achievements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_achievements FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE milestones ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON milestones FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE waivers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON waivers FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE suspensions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON suspensions FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE transfers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON transfers FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_draft ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_draft FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON expenses FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE playoff_brackets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON playoff_brackets FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE playoff_seedings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON playoff_seedings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON events FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE event_rsvps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON event_rsvps FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON messages FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON documents FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE google_sheets_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON google_sheets_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE google_apps_script_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON google_apps_script_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE shopify_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON shopify_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON system_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE definitions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON definitions FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE game_attendance ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON game_attendance FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE game_periods ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON game_periods FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE penalty_box_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON penalty_box_events FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_versus_team_records ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_versus_team_records FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE goalie_statistics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON goalie_statistics FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON groups FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE group_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON group_members FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE practice_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON practice_sessions FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE practice_attendance ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON practice_attendance FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_availability ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_availability FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE official_assignments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON official_assignments FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE game_scheduling_conflicts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON game_scheduling_conflicts FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE appeals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON appeals FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE appeal_workflow_steps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON appeal_workflow_steps FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE coaching_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON coaching_notes FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE playbooks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON playbooks FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE playbook_diagrams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON playbook_diagrams FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_advanced_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_advanced_stats FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_development_plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_development_plans FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE development_milestones ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON development_milestones FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_contracts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_contracts FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE contract_terms ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON contract_terms FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE league_bylaws ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON league_bylaws FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE rule_enforcement_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON rule_enforcement_log FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE salary_cap_rules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON salary_cap_rules FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE salary_cap_tracking ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON salary_cap_tracking FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_movement_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_movement_log FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE incident_reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON incident_reports FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE incident_investigation ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON incident_investigation FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE ticket_inventory ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON ticket_inventory FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE ticket_sales ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON ticket_sales FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE merchandise_products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON merchandise_products FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE merchandise_orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON merchandise_orders FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE merchandise_order_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON merchandise_order_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE sponsorship_deliverables ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON sponsorship_deliverables FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE sponsorship_payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON sponsorship_payments FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON announcements FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE announcement_audience ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON announcement_audience FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE fan_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON fan_profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE social_media_accounts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON social_media_accounts FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE social_media_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON social_media_posts FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON tournaments FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE tournament_teams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON tournament_teams FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE tournament_brackets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON tournament_brackets FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE season_archives ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON season_archives FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE dashboard_widgets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON dashboard_widgets FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE season_current ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON season_current FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE membership_lookup ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON membership_lookup FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_season_rosters ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_season_rosters FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE division_team_lookup ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON division_team_lookup FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_lookup ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_lookup FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_contract_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_contract_history FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE event_status_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON event_status_log FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_season_stats_cache ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_season_stats_cache FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE bulk_import_staging ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON bulk_import_staging FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE sheet_build_order ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON sheet_build_order FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON user_preferences FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE role_permissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON role_permissions FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON user_roles FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE clubs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON clubs FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE conferences ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON conferences FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE org_seasons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON org_seasons FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE season_phases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON season_phases FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_managers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_managers FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE roster_players ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON roster_players FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE lineup_players ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON lineup_players FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE competitions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON competitions FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE competition_teams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON competition_teams FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE brackets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON brackets FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE playoff_rounds ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON playoff_rounds FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE playoff_series ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON playoff_series FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE playoff_series_games ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON playoff_series_games FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE bracket_teams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON bracket_teams FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE bracket_matches ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON bracket_matches FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE ice_time_bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON ice_time_bookings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE ice_time_availability ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON ice_time_availability FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_standings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_standings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_goals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_goals FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_kpis ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_kpis FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_kpi_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_kpi_history FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE season_objectives ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON season_objectives FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_drafts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_drafts FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE draft_teams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON draft_teams FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE draft_picks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON draft_picks FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE scorekeeper_default_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON scorekeeper_default_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE scorekeeper_game_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON scorekeeper_game_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE scorekeeper_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON scorekeeper_sessions FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_injuries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_injuries FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_transfers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_transfers FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_discipline ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_discipline FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_salary ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_salary FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_ratings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_ratings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON equipment FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE player_sticks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON player_sticks FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE equipment_assignments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON equipment_assignments FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE equipment_maintenance ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON equipment_maintenance FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE officials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON officials FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE official_ratings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON official_ratings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE ijshockey_sync_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON ijshockey_sync_log FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON invoices FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON invoice_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON payments FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON audit_logs FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE notification_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON notification_logs FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON media FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE user_timezone ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON user_timezone FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE fan_memberships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON fan_memberships FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE loyalty_points ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON loyalty_points FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE season_tickets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON season_tickets FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE fan_clubs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON fan_clubs FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE fan_club_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON fan_club_members FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE advertisements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON advertisements FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE ad_placements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON ad_placements FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE stick_customization_orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON stick_customization_orders FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE stick_customization_specs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON stick_customization_specs FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE team_rivalries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON team_rivalries FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE rivalry_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON rivalry_stats FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE lineup_units ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON lineup_units FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE lineup_unit_players ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON lineup_unit_players FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE stick_products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON stick_products FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE stick_polls ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON stick_polls FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE stick_poll_responses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON stick_poll_responses FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE stick_feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON stick_feedback FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE stick_recommendations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON stick_recommendations FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE schema_tables ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON schema_tables FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE app_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON app_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE first_time_setup ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON first_time_setup FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE shopify_integration ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON shopify_integration FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE shopify_product_sync ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON shopify_product_sync FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE gas_integration ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON gas_integration FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE gas_executions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON gas_executions FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE google_sheets_config ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON google_sheets_config FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE google_sheets_sync_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON google_sheets_sync_log FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE archived_records ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON archived_records FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON jobs FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE template_entity ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON template_entity FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE template_link ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON template_link FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE template_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON template_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
ALTER TABLE template_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all for authenticated users" ON template_log FOR ALL TO authenticated USING (true) WITH CHECK (true);
